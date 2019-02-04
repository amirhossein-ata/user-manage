import React from 'react'
import {connect} from 'react-redux'
import {List, Button, Grid, Image, Header, Message, Modal} from 'semantic-ui-react'
import {get_single_user, get_users_list} from '../actions/users-actions'
import ProfileModal from './userProfileModal'

class Dashboard extends React.Component{
    
    state = {
        page:1,
        fetchError:false,
        modalOpen:false,
        user: ''
    }
    componentDidMount(){
        this.props.getUsersList(this.state.page, (response, status) => {
            if(!status){
                this.setState(() => ({fetchError: true}))
            }
        })
    }

    handleClose = () => {
        this.setState(() => ({modalOpen:false}))
    }
    
    onShowProfileClick = (id) => {
        const index = this.props.usersList.findIndex(user => user.id === id)
        const user = this.props.usersList[index]
        this.setState(() => ({user: user , modalOpen:true}))


    }
    render(){
        return(
            <Grid centered textAlign="right">
                <ProfileModal 
                    profileModalOpen = {this.state.modalOpen}
                    handleClose = {this.handleClose}
                    avatar = {this.state.user.avatar}
                    firstName = {this.state.user.first_name}
                    lastName = {this.state.user.last_name}
                />
                <Grid.Row>
                    <Grid.Column width="10">    
                        <br></br>
                        <Header dividing textAlign="right">
                            لیست کاربران
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Column width="10">
                    {this.state.fetchError ? (
                        <Message negative>
                            مشکلی در گرفتن کاربران پیش آمده است.
                        </Message>
                    ): (
                        <List divided verticalAlign='middle'>
                        {this.props.usersList.map((user) => (
                            <List.Item>
                                    <List.Content floated='right'>
                                        <Button
                                            basic 
                                            color='red' 
                                            content='Red'
                                        >
                                            حذف
                                        </Button>
                                        <Button
                                            basic 
                                            color='orange' 
                                            content='orange'
                                        >
                                            ایجاد تغییر
                                        </Button>
                                        <Button
                                            onClick = {() => this.onShowProfileClick(user.id)}    
                                            basic 
                                            color='blue' 
                                            content='blue'
                                        >
                                        مشاهده‌ی پروفایل
                                    </Button>  
                                    </List.Content>
                                        <Image avatar src={user.avatar} />
                                    <List.Content>{user.first_name} {user.last_name}</List.Content>
                            </List.Item>                        
                        ))}
                            
                        </List>
            
                    )}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.usersReducer.usersList)
    return{
        usersList : state.usersReducer.usersList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUsersList : (page, callback) => dispatch(get_users_list(page, callback)),
        getSingleUser: (userId, callback) => dispatch(get_single_user(userId, callback))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);