import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

/* IMPORT PATHS/ROUTES */
import * as ROUTES from '../../constants/routes';

/* IMPORT COMPONENTS */
import Navigation from '../Navigation/Navigation'
import LandingPage from '../Landing/LandingPage';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';

const App = () => {
    return (
        <Router>
            <Navigation />
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

export default App;