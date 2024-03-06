import React from 'react'
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { receivedActions } from '../store/MailReceivedReducer';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { sentActions } from '../store/MailSentReducer';
import draftToHtml from 'draftjs-to-html';
const MailCard = (props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((state)=>{
    return state.user.user})
    const apiMail=user.replace('@','').replace('.','')
    const deleteTheMail=async()=>{
      if(props.sent){
        dispatch(sentActions.removeMail({id:props.mail.id}))
        const res=await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${apiMail}/sent/${props.mail.id}.json`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        })
        console.log('res',res)
      }else{
        dispatch(receivedActions.removeReceivedMail({id:props.mail.id}))
        const res=await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${apiMail}/receive/${props.mail.id}.json`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        })
        console.log('res',res)
        
      }
    }
  const toggleRead=async()=>{
    navigate(`/inbox/mail/${props.sent?'sent':'receive'}/${props.mail.id}`)
    if( !props.sent && !props.mail.read ){
      dispatch(receivedActions.markAsRead({id:props.mail.id}))
      await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${user}/receive/${props.mail.id}.json`,
      {
        method:"PATCH",
        body:JSON.stringify({
          read:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      })
    }
  }
  const text=draftToHtml(JSON.parse(props.mail.editorContent))
  return (
    <ListGroup.Item
        as="li"
        className='d-flex align-items-center'
      >
        <Button variant='light' onClick={toggleRead} className='w-100 text-center'>
        <div className="ms-2 me-auto d-flex justify-content-between align-items-center w-100 ">
        
          <div className="fw-bold ">
            {!props.sent  && !props.mail.read && <span className='fw-bold fs-6 text-primary'>o </span>}{props.sent?props.mail.receiver:props.mail.sender}</div>
         <div > {props.mail.subject}</div>
        <div >
          <p className='pt-3 ' dangerouslySetInnerHTML={{__html:text}}></p>
        </div>
        </div>
        </Button>
        <Button variant='light' onClick={deleteTheMail} className='ms-2 p-0 text-center fs-4'><RiDeleteBin6Fill /></Button>
      </ListGroup.Item>
  )
}

export default MailCard