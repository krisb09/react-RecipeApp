import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Navbar from '../components/Navbar';
import '../styles/Contact.css'

function Contact() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Form>
          <Label>Name:</Label>
          <Input placeholder="Name"></Input>
          <Label>Email:</Label>
          <Input placeholder="Email"></Input>
          <FormGroup>
            <Label for="exampleText">Comments:</Label>
            <Input id="exampleText" name="text" type="textarea" />
          </FormGroup>

          <Button
            style={{
              marginTop: 10,
              backgroundColor: "rgb(253, 82, 82)",
              border: "none",
            }}
            className="contactButton"
          >
            Submit
          </Button>
        </Form>
        <></>
      </Container>
    </React.Fragment>
  );
}

export default Contact