import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const LoginModal = () => (
  <Modal>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <h2>
        Charity Match
      </h2>
      <p>Username</p>
      <input type="text" val=""></input>
      <p>Password</p>
      <input type="text" val=""></input>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green'>
        <Icon name='login' /> Log In
      </Button>
      <Button color='blue'>
        <Icon name='signup'/>Sign Up
      </Button>
    </Modal.Actions>
  </Modal>
)

export default LoginModal