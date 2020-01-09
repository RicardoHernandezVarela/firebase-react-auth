import React from 'react';
import { withRouter } from 'react-router-dom';

/* Import Firebase context */
import { withFirebase } from '../Firebase/index';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

/* This funtion takes a component as argument */
const withAuthorization = (condition) => (Component) => {

    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return <Component { ...this.props } />;
        }
    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;