import React from 'react';
import { Link } from 'react-router-dom';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

/* Import components */
import SignOut from '../SignOut/SignOut';

const Navigation = ({ authUser }) => {
    return (
        <div>
            {authUser ? <NavigationAuth />: <NavigationNonAuth />}
        </div>
    );
} 

const NavigationAuth = () => {
    return (
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <SignOut />
            </li>
        </ul>
    );
};

const NavigationNonAuth = () => {
    return (
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
        </ul>
    );
};

export default Navigation;
