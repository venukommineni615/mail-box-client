import React from 'react'
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
const MailCard = (props) => {
  const user=useSelector((state)=>{
    return state.user.user})
  const toggleRead=async()=>{
    if(!props.mail.read){

      const res=await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${user}/receive/${props.mail.id}.json`,
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
        <Button variant='light' onClick={toggleRead}>
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