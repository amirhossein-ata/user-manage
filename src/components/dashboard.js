import React from 'react'
import {connect} from 'react-redux'
import {List, Button, Grid, Image, Header, Message, Divider} from 'semantic-ui-react'
import {deleteUser, updateUser, addUser} from '../actions/users-actions'
import ProfileModal from './userProfileModal'
import DeleteModal from './deleteUserModal'
import AddModal from './addUserModal'
import UpdateModal from './updateUserModal'
import Navbar from './Navbar'

class Dashboard extends React.Component{
    
    state = {
        credentials:{
            first_name:'',
            last_name:''
        },
        fetchError: false,
        profileModalOpen: false,
        deleteModalOpen: false,
        updateModalOpen: false,
        addModalOpen: false,
        user: ''
    }
    

    // componentDidUpdate(){
    //     localStorage.setItem('users',JSON.stringify(this.props.usersList))
    // }
    handleClose = (type) => {
        switch (type) {
            case 'profile':
                this.setState(() => ({profileModalOpen: false}))
                break;
            case 'delete':
                this.setState(() => ({deleteModalOpen: false}))
                break
            case 'add':
                this.setState(() => ({addModalOpen: false}))
                break
            case 'update':
                this.setState(() => ({updateModalOpen: false}))
                break
            default:
                break;
        }
        this.setState(() => ({user:''}))

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

    onShowUpdateModel = (id) => {
        const index = this.props.usersList.findIndex(user => user.id === id)
        const user = this.props.usersList[index]
        this.setState(() => ({user: user , updateModalOpen:true}))
    }

    onShowAddModal = () => {
        this.setState(() => ({addModalOpen: true}))
    }
    
    handleInpuChange= (inputName, input) => {
        let credentials = this.state.credentials;
        credentials[inputName] = input
        this.setState(() => ({credentials : credentials}))    
    }
    
    onAddUser = () => {
        this.props.addUser(this.state.credentials)
    }
    onUpdate = () => {
        const credentials = {
            id: this.state.user.id,
            first_name: this.state.credentials.first_name,
            last_name: this.state.credentials.last_name
        }
        this.props.updateUser(credentials)
    }
    onConfirmDelete = () => {
        this.props.deleteUser(this.state.user.id)    
    }

    render(){

        const defaultPic = "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
        return(
            <Grid centered textAlign="right">
                <Navbar />
                <ProfileModal 
                    profileModalOpen = {this.state.profileModalOpen}
                    handleClose = {() => this.handleClose('profile')}
                    avatar = {this.state.user.avatar ? this.state.user.avatar : defaultPic}
                    firstName = {this.state.user.first_name}
                    lastName = {this.state.user.last_name}
                />
                <DeleteModal
                    deleteModalOpen = {this.state.deleteModalOpen}
                    handleClose = {() => this.handleClose('delete')}
                    onDelete = {this.onConfirmDelete}
                />
                <AddModal 
                    addModalOpen = {this.state.addModalOpen}
                    handleClose = {() => this.handleClose('add')}
                    onSubmit = {this.onAddUser}
                    onChange = {this.handleInpuChange}
                />
                <UpdateModal
                    updateModalOpen = {this.state.updateModalOpen}
                    handleClose = {() => this.handleClose('update')}
                    onSubmit = {this.onUpdate}
                    onChange = {this.handleInpuChange}
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
                        <div>
                            {this.props.usersList.length > 0 ? (
                                    
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
                                                                onClick = {() => this.onShowUpdateModel(user.id)}
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
                                                            <Image avatar src={user.avatar ? user.avatar : defaultPic} />
                                                        <List.Content>{user.first_name} {user.last_name}</List.Content>
                                                </List.Item>                        
                                            ))}
                                        
                                    
                                    
                                </List>):(
                                    <Message info>
                                        کاربری وجود ندارد
                                    </Message>
                            )}
                            <Divider hidden section/>
                            <Grid centered>
                                <Button 
                                    onClick = {this.onShowAddModal}
                                    color = "green"
                                >
                                    اضافه کردن کاربر
                                </Button>                        
                            </Grid>

                        </div>
                    )}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        usersList : state.usersReducer.usersList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteUser: (userId) => dispatch(deleteUser(userId)),
        updateUser: (credentials) => dispatch(updateUser(credentials)),
        addUser: (credentials) => dispatch(addUser(credentials)),
 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);