import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* Import Firebase context */
import { withFirebase } from '../Firebase/index';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

const SignOut = () => {
    return (
        <SignOutButton />
    );
}

class SignOutBase extends Component {

    onClick = () => {
        this.props.firebase.doSignOut()
            .then(this.props.history.push(ROUTES.LANDING))
    }

    render() {
        return (
            <button type="button" onClick={this.onClick}>
                Sign Out
            </button>
        )
    }
}

const SignOutButton = withRouter(withFirebase(SignOutBase));

export default SignOut;