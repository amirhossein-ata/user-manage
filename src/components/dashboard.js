import React from 'react'
import {connect} from 'react-redux'
import {List, Button, Grid, Image, Header, Message, Modal} from 'semantic-ui-react'
import {get_single_user, get_users_list, deleteUser, updateUser} from '../actions/users-actions'
import ProfileModal from './userProfileModal'
import DeleteModal from './deleteUserModal'

class Dashboard extends React.Component{
    
    state = {
        page: 1,
        fetchError: false,
        profileModalOpen: false,
        deleteModalOpen: false,
        editModalOpen: false,
        user: ''
    }
    componentDidMount(){
        this.props.getUsersList(this.state.page, (response, status) => {
            if(!status){
                this.setState(() => ({fetchError: true}))
            }
        })
    }

    handleClose = (type) => {
        switch (type) {
            case 'profile':
                this.setState(() => ({profileModalOpen:false}))
                break;
            case 'delete':
                this.setState(() => ({deleteModalOpen:false}))
                break
            default:
                break;
        }
    }
    
    onShowProfileClick = (id) => {
        const index = this.props.usersList.findIndex(user => user.id === id)
        const user = this.props.usersList[index]
        this.setState(() => ({user: user , profileModalOpen:true}))
    }

    onShowDeleteModal = (id) => {
        const index = this.props.usersList.findIndex(user => user.id === id)
        const user = this.props.usersList[index]
        this.setState(() => ({user: user , deleteModalOpen:true}))
    }

    onConfirmDelete = () => {
        this.props.deleteUser(this.state.user.id)    
    }
    render(){
        return(
            <Grid centered textAlign="right">
                <ProfileModal 
                    profileModalOpen = {this.state.profileModalOpen}
                    handleClose = {() => this.handleClose('profile')}
                    avatar = {this.state.user.avatar}
                    firstName = {this.state.user.first_name}
                    lastName = {this.state.user.last_name}
                />
                <DeleteModal
                    deleteModalOpen = {this.state.deleteModalOpen}
                    handleClose = {() => this.handleClose('delete')}
                    onDelete = {this.onConfirmDelete}
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
                                            onClick = {() => this.onShowDeleteModal(user.id)}    
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
        getSingleUser: (userId, callback) => dispatch(get_single_user(userId, callback)),
        deleteUser: (userId) => dispatch(deleteUser(userId)),
        updateUser: (credentials) => dispatch(updateUser(credentials))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);