import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
const MailCard = () => {
  return (
    <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto d-flex justify-content-between w-100">
          <div className="fw-bold">Sender</div>
         <div> Subject</div>
        <div >
          content
        </div>
        </div>
      </ListGroup.Item>
  )
}

export default MailCard