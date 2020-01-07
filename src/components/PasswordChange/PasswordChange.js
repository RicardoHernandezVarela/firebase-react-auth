import React, { Component } from 'react';

/* Import Firebase context */
import { withFirebase } from '../Firebase/index';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="passwordOne"
                    value={this.state.passwordOne}
                    onChange={this.onChange}
                    type="text"
                    placeholder="New Password"
                />
                <input 
                    name="passwordTwo"
                    value={this.state.passwordTwo}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Change My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>

        );
    }
}

export default withFirebase(PasswordChangeForm);