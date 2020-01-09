import React, { Component } from 'react';

/* Import Firebase context */ 
import { withFirebase } from '../Firebase/index';

class AdminPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: {},
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        /* Listener on() triggers everytime something has changed */
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            console.log(usersObject);
            if (usersObject !== null) {
                const usersList = Object.keys(usersObject).map(key => ({
                    ...usersObject[key],
                    uid: key,
                }));
    
                this.setState({
                    users: usersList,
                    loading: false,
                }, () => console.log(this.state.users));
            }
        });
        
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;
        const totalUsers = Object.entries(users).length;
        const usersExist = totalUsers !== 0

        return (
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading...</div>}
                {usersExist && <UserList users={users} />} 
            </div>
        )
    }
}

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map(user => {
                //console.log(user)
                return (
                    <li key={user.uid}>
                        <span>
                            <strong>ID:</strong> {user.uid}
                        </span>
                        <span>
                            <strong>E-Mail:</strong> {user.email}
                        </span>
                        <span>
                            <strong>Username:</strong> {user.username}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default withFirebase(AdminPage);