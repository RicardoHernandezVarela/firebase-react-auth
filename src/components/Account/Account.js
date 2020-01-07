import React from 'react';

/* Import components */

import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';

const AccountPage = () => {
    return (
        <div>
            <h1>Account Page</h1>
            <PasswordForgetForm />
            <PasswordChangeForm />
        </div>
    );
}

export default AccountPage;