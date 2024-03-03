import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import MailCard from './MailCard';
const MailList = (props) => {
  return (
    <ListGroup as="ul" className='p-0 rounded-0' >
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
        <MailCard></MailCard>
    </ListGroup>
  )
}

export default MailList