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
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading...</div>}
                <UserList users={users} />
            </div>
        )
    }
}

const UserList = ({ users }) => {
    return (
        <ul>
            { users.map(user => {
                return (
                    <li>
                        <span>
                            <strong>ID:</strong> {user.ig}
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