import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { MdOutlineMail } from "react-icons/md";
import { TiAttachmentOutline } from "react-icons/ti";
import { MdOutlineGifBox } from "react-icons/md";
import { FiSmile } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { sentActions } from "../store/MailSentReducer";
const ComposeMail = () => {
    const email=useRef()
    const subject=useRef()
    const dispatch=useDispatch()
    let selfEmailId = localStorage.getItem('email');
let cleanedEmail = selfEmailId.replace("@", "").replace(".com", "");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  
  const submitData= async(e)=>{
    e.preventDefault();
    const editorContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    
    const formData={
        email:email.current.value,
        subject:subject.current.value,
        editorContent,
        
    }
    let updatedEmail = email.current.value.replace("@", "").replace(".com", "");
    try {
        const res = await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${cleanedEmail}/sent.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify({...formData,receiver:email.current.value}),
        });
        const data=await res.json()
        if(!res.ok){
            throw new Error(data.error.message)
        }
        dispatch(sentActions.addMail({id:data.name,...formData,from:selfEmailId}))
       
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    

      try {
          const res = await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${updatedEmail}/receive.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...formData,from:selfEmailId, sender:selfEmailId,read:false}),
          });
          const data=await res.json()
          if(!res.ok){
              throw new Error(data.error.message)
          }
         
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      email.current.value=''
      subject.current.value=''
      setEditorState(EditorState.createEmpty())
      
  }

  

  return (
    <Form className="d-flex flex-column justify-content-between vh-100 p-3 bg-warning-subtle" onSubmit={submitData}>
      <div className="vh-75">
        <InputGroup className="mb-3 shadow border border-1 border-secondary rounded">
          <InputGroup.Text id="basic-addon1">
            <MdOutlineMail />
          </InputGroup.Text>
          <Form.Control
          ref={email}
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic-addon1"
            type="email"
            required
          />
          <InputGroup.Text className="bg-white">CC/BCC</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3  shadow border border-1 border-secondary rounded">
          <Form.Control
          ref={subject}
          type='text'
            placeholder="Subject"
            aria-label="Username"
            aria-describedby="basic-addon1"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3 outline-none border-bottom-2">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
            toolbarClassName="toolbarClassName border border-2 border-secondary shadow rounded mx-auto"
            wrapperClassName="wrapperClassName mx-auto vw-100 vh-50 mb-4"
            editorClassName="editorClassName bg-white shadow border border-2  border-secondary rounded"
           
          />
          ;
        </InputGroup>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <Button type="submit" variant={"primary"} className="px-3 mx-3">
            Send
          </Button>
          <TiAttachmentOutline className="mx-3 fs-4"></TiAttachmentOutline>
          <MdOutlineGifBox className="mx-3 fs-4"></MdOutlineGifBox>
          <FiSmile className="mx-3 fs-4"></FiSmile>
        </div>
        <div className="text-end">
          <RiDeleteBin5Line className="mx-3 fs-4"></RiDeleteBin5Line>
        </div>
      </div>
    </Form>
  );
};

export default ComposeMail;
