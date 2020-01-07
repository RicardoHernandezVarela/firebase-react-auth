import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

/* IMPORT PATHS/ROUTES */
import * as ROUTES from '../../constants/routes';

/* Import FirebaseContext */
import { withFirebase } from '../Firebase/index';

/* IMPORT COMPONENTS */
import Navigation from '../Navigation/Navigation'
import LandingPage from '../Landing/LandingPage';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';

class App extends Component {
    constructor(props) {
        super(props);

        /* Session handling */
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        /********************************************************
          Listener to get the authenticated user from Firebase is 
          called when user signs up, signs in and signs out.
        ********************************************************/
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({authUser: authUser})
                    : this.setState({authUser: null}); 
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <Navigation authUser={this.state.authUser}/>
                <hr />
    
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                    <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
                </Switch>
            </Router>
        );
    }

}

export default withFirebase(App);