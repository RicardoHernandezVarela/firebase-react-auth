import React from 'react';

/* Import withAuthorization */
import { withAuthorization } from '../Session/index';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome User!!!</h1>
            <p>Home page accesible only to signed in users</p>
        </div>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);