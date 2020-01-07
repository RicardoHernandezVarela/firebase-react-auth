import React from 'react';

/* Import Firebase context */
import { withFirebase } from '../Firebase/index';

const SignOutButton = ({ firebase }) => {
    return (
        <button type="button" onClick={firebase.doSignOut}>
            Sign Out
        </button>
    );
}

export default withFirebase(SignOutButton);