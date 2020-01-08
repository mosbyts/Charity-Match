import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const SignUpModal = () => (
  <Modal trigger={<Button>Sign Up</Button>} closeIcon>
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
    </Modal.Actions>
  </Modal>
)

export default SignUpModal