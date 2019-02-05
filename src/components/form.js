import React from 'react'
import { Button, Message, Form } from 'semantic-ui-react'


class RawForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            credentials: {
                email: props.email,
                password: props.password
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

    onSubmit = () => {
        this.props.onSubmit(this.state.credentials)
    }
    

    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmit} >
                        <Form.Field>
                            <Form.Input
                                fluid
                                label="ایمیل"
                                name="email"
                                value={this.state.credentials.email}
                                onChange={this.handle_change}                                
                            />
                        </Form.Field>
                        
                        <Form.Field>
                            <Form.Input
                                fluid
                                label="رمز عبور"
                                name="password"
                                type='password'
                                value={this.state.credentials.password}
                                onChange={this.handle_change}
                            />                 
                        </Form.Field>
                    {this.props.submitError && (
                        <Message negative>
                            مشکلی پیش آمده است لطفا مجدد امتحان کنید.
                        </Message>
                    )}
                    <Button primary type='submit'>ورود</Button>
                </Form>
            </div>
        )
    }
}
export default RawForm