import React from 'react';

/* Import withAuthorization */
import { withAuthorization } from '../Session/index';

/* Import components */

import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';

const AccountPage = (props) => {
    const email = 
        props.authUser !== null ? props.authUser.email: "No autenticado";
    return (
        <div>
            <h1>Account Page</h1>
            <h6>{email}</h6>
            <PasswordForgetForm />
            <PasswordChangeForm />
        </div>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);