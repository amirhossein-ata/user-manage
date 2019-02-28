import React from 'react'
import {Form, Icon, Input, Button} from 'antd';

export const Form = (props) => {
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')

    handle_change= (e) => {
        const input = e.target.value;
        let credentials = this.state.credentials;
        const inputName = e.target.name
        switch (inputName) {
            case 'email':
                changeEmail(input)
                this.props.onChange(inputName, input)  
                break;
            case 'password':
                changePassword(input)
                this.props.onChange(inputName, input)  
            default:
                break;

        }
    }

    return(
        <Form  onSubmit={() => props.onSubmit({email,password})}>
            <Form.Item>
                    <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        placeholder="Username" 
                        name="email"
                        value={email}
                        onChange={() => changeEmail(e.value)}   
                    />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={() => changePassword(e.value)}
            
                />
                
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Log in
                </Button>
            </Form.Item>
        </Form>

    )
    
}

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
                 <Form  onSubmit={this.onSubmit}>
                    <Form.Item>
                            <Input 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="Username" 
                                name="email"
                                value={this.state.credentials.email}
                                onChange={this.handle_change}   
                            />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handle_change}
                    
                        />
                        
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                
            </div>
        )
    }
}
export default RawForm