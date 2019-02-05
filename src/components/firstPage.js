import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

import {Grid, Divider, Menu, Segment} from 'semantic-ui-react'
class FirstPage extends React.Component{
    state={
        activeItem:'login'
    } 
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        let activeItem = this.state.activeItem
        return(
            <Grid centered>
                <Grid.Column width="10">
                <Divider hidden section/>
                <Menu attached='top' tabular >
                    <Menu.Item 
                        position="right"
                        name='register'
                        content="ثبت نام" 
                        active={activeItem === 'register'} 
                        onClick={this.handleItemClick} 
                    />
                    <Menu.Item
                        name='login'
                        content="ورود" 
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    />
                 </Menu>
      
                <Segment attached='bottom'>
                    {this.state.activeItem === 'login' ? <LoginForm /> : <RegisterForm />}
                </Segment>
                
                </Grid.Column>
                
            </Grid>
        )
    }
}

export default FirstPage