import React from 'react'
import { Modal, Image, Grid} from 'semantic-ui-react'

export default (props) => (
    <Modal
        open={props.profileModalOpen}
        onClose={props.handleClose}
        closeIcon
        size = "tiny"
        dimmer={true}
    >
    <Modal.Content>
        <Grid centered> 
            <Image  src={props.avatar} />
        </Grid>
        <Grid centered>        
            <p>{props.firstName} {props.lastName}</p>
        </Grid>        

    </Modal.Content>
  </Modal>

)