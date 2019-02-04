import React from 'react'
import { Modal, Header, Button, Icon} from 'semantic-ui-react'

export default (props) => (
    <Modal
        open={props.deleteModalOpen}
        onClose={props.handleClose}
        closeIcon
        size = "tiny"
        dimmer = "blurring"
    >
        <Header icon='trash' />
        <Modal.Content >
            <p style={{textAlign:"right"}}> 
                آیااز حذف کردن این کاربر اطمینان دارید؟
            </p>
        </Modal.Content>
        <Modal.Actions>
            <Button 
                 
                color='red' 
                inverted
            >
                <Icon name='remove' /> خیر
            </Button>
            <Button 
                onClick={props.onDelete}
                color='green' 
                inverted
            >
                <Icon name='checkmark' /> بله
            </Button>
        </Modal.Actions>
    </Modal>

)