import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import LoginModal from "../Log In Modal/index";

const SignUpModal = () => (
  <Modal>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <h2>
        Charity Match
      </h2>
      <p>Full Name</p>
      <input type="text" val=""></input>
      <p>Email</p>
      <input type="text" val=""></input>
      <p>Username</p>
      <input type="text" val=""></input>
      <p>Password</p>
      <input type="text" val=""></input>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green'>
        <Icon name='signup' /> Sign Up
      </Button>
      <Button color='blue'>
        <Icon name='login' />Log In
      </Button>
    </Modal.Actions>
  </Modal>
)

export default SignUpModal