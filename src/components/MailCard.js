import React from 'react'
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { receivedActions } from '../store/MailReceivedReducer';
const MailCard = (props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((state)=>{
    return state.user.user})
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
  return (
    <ListGroup.Item
        as="li"
        
      >
        <Button variant='light' onClick={toggleRead} className='w-100'>
        <div className="ms-2 me-auto d-flex justify-content-between align-items-center w-100 ">
        
          <div className="fw-bold ">
            {!props.sent  && !props.mail.read && <span className='fw-bold fs-6 text-primary'>o </span>}{props.sent?props.mail.receiver:props.mail.sender}</div>
         <div > {props.mail.subject}</div>
        <div >
          content
        </div>
        </div>
        </Button>
      </ListGroup.Item>
  )
}

export default MailCard