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

const App = () => {
    return (
        <Router>
            <Navigation />
            <hr />

            <Switch>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            </Switch>
        </Router>
    );
}

export default App;