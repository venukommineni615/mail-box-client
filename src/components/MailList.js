import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import MailCard from './MailCard';
const MailList = (props) => {
  return (<>
    {props.mails.length!==0 && <ListGroup as="ul" className='p-0 rounded-0' >
       {props.mails.map((mail)=>{
          return <MailCard sent={props.sent} key={mail.id} mail={mail}></MailCard>
       })}
    </ListGroup>}
    {props.mails.length===0 && <p className='fw-bold fs-3 text-center'>oops! {props.sent?"you haven't sent any mails":"you didn't receive any mails"}</p>}
  </>
  )
}

export default MailList