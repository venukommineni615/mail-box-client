import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import draftToHtml from 'draftjs-to-html';
import { Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
const Mail = () => {
    const {type,id}=useParams()
    const navigate=useNavigate()
    const sentMails=useSelector((state)=>{
        return state.sent.mails
    })
    const receiveMails=useSelector((state)=>{
        return state.received.mails
    })
    let mails=receiveMails
    if(type==='sent'){
        mails=sentMails
    }
    const mail=mails.filter((item)=>{
        return item.id===id
    })
    console.log(mail)
    const text=draftToHtml(JSON.parse(mail[0].editorContent))
  return (
    <>
    <Button variant='light' className='text-dark ms-4 border-1 mt-2' onClick={()=>{navigate(-1)}}><IoMdArrowRoundBack />Back</Button>
    <div className='bg-white m-4 p-2 rounded'>
        <p className='fs-4 fw-semibold ms-5 ps-2'>{mail[0].subject}</p>
        <div className='d-flex '>
            <span className='fs-3 mx-3'><FaRegUserCircle /></span>
            <div>
                <p className='m-0'>{mail[0].email}</p>
                <p className='opacity-75'>{mail[0].receiver}</p>
            </div>
        </div>
        <div className='ms-5 ps-3' dangerouslySetInnerHTML={{__html:text}}></div>
    </div>
    </>
  )
}

export default Mail