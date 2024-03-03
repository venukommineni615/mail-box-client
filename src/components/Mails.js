import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import MailList from "./MailList";


const Mails = () => {
   
  return (
    <div className="bg-warning-subtle">
      <Navbar className="bg-warning">
        <Container className="w-50">
          <Navbar.Brand href="#" className="fw-bold fs-3">Email</Navbar.Brand>
        </Container>
        <Form inline='true' className="text-center me-4">
          <Row className="d-flex justify-content-around ">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 d-inline-block"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="d-inline-block bg-white border-0 rounded"><FaSearch className="bg-white text-dark" /></Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row className="mx-0 pt-1 bg-warning-subtle mx-2">
          <Col sm={2} className="bg-warning-subtle px-0">
            <Nav variant="pills" className="flex-column bg-warning-subtle">
              <Nav.Item >
                <Nav.Link eventKey="first"  className="text-dark rounded-0">Inbox</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className="text-dark rounded-0" eventKey="second">Sent</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className="bg-warning-subtle px-0">
            <Tab.Content >
              <Tab.Pane eventKey="first" ><MailList></MailList></Tab.Pane>
              <Tab.Pane eventKey="second"><MailList></MailList>jflkjl</Tab.Pane>
            </Tab.Content >
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Mails;
