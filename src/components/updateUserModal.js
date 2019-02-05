import React from 'react'
import { Modal, Header, Button, Form } from 'semantic-ui-react'

class UpdateUserModal extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            credentials:{
                first_name: '',
                last_name: ''
            }
        }
    }

    handle_change= (e) => {
        const input = e.target.value;
        let credentials = this.state.credentials;
        const inputName = e.target.name
        credentials[inputName] = input
        this.setState(() => ({credentials : credentials}))  
        this.props.onChange(inputName, input)  
    }

    render(){
        return(
            <Modal
                open={this.props.updateModalOpen}
                onClose={this.props.handleClose}
                closeIcon
                size = "tiny"
                dimmer = "blurring"
            >
                <Header icon="edit" />
                <Modal.Content >
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                name = "last_name"
                                value = {this.state.credentials.last_name} 
                                onChange = {this.handle_change} 
                                fluid 
                                label='نام خانوادگی' 
                            />
                            <Form.Input 
                                name = "first_name" 
                                value = {this.state.credentials.first_name}
                                onChange = {this.handle_change} 
                                fluid 
                                label='نام' 
                            />
                        
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                        onClick={this.props.onSubmit}
                        color='green' 
                        inverted
                    >
                        ثبت
                    </Button>
                </Modal.Actions>
            </Modal>
    
        )
    }

}

export default UpdateUserModal;