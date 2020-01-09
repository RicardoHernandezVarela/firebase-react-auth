import React,  { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

/* Impport routes / path */
import * as ROUTES from '../../constants/routes';

/* Import firebase context */
import { withFirebase } from '../Firebase/index';

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm />
        </div>
    )
};

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (event) => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                /* Create user in firestore real-time database */

                return this.props.firebase
                    .user(authUser.user.id) /* Create or get the user in real-time db */
                    .set({ /* Assign user info */
                        username,
                        email,
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
        
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error.message}</p>}

            </form>
        );
    }
}

const SignUpLink = () => {
    return (
        <p>
            Don´t have an account? 
            <Link to={ROUTES.SIGN_UP}>
                Sign Up
            </Link>
        </p>
    )
}

/***************************************************
 Use the Higher order component from context.js
 passing the SignUpFormBase as argument, this makes
 the firebase instance avaliable for this component
 ***************************************************/
const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink};