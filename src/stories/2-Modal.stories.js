import React from 'react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal, Button} from 'react-bootstrap';

export default {
    title: 'Modal',
  };

  export const modal = () => (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>
                Modal Title
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Here is the modal body text</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant='secondary'>Close</Button>
            <Button variant='primary'>Save Changes</Button>
        </Modal.Footer>

    </Modal.Dialog>
  );
