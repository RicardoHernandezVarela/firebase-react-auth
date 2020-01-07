import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* Import FirebaseContext */
import { withFirebase } from '../Firebase/index';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

/* Import components */
import { SignUpLink } from '../SignUp/SignUp';

const SignInPage = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm />
            <SignUpLink />
        </div>
    );
};

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onChange = (event) => {
        this.setState({ [event.target.name ]: event.target.value});
    };

    onSubmit = (event) => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then( () => {
                this.setState({ ...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
            
        event.preventDefault();
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input 
                    name='password'
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };
