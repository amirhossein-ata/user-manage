import React,{useState} from 'react'
import {Form, Icon, Input, Button} from 'antd';

export const Raw_Form = (props) => {
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')

    const handle_change= (e) => {
        const input = e.target.value;
         const inputName = e.target.name
        switch (inputName) {
            case 'email':
                changeEmail(input)
                props.onChange(inputName, input)  
                break;
            case 'password':
                changePassword(input)
                props.onChange(inputName, input)  
            default:
                break;

        }
    }
    const onSubmit = (email,password) => {
        const credentials = {
            email,
            password
        }
        props.onSubmit(credentials)
    }
    return(
        <Form  onSubmit={onSubmit}>
            <Form.Item>
                    <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        placeholder="Username" 
                        name="email"
                        value={email}
                        onChange={handle_change}   
                    />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={handle_change}
            
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