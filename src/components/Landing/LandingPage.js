import React from 'react';
import { FirebaseContext } from '../Firebase';

const LandingPage = () => {
    return (
        <FirebaseContext.Consumer>
            {firebase => {
                console.log(firebase);
                return (
                    <div>
                        <h6>Firebase was initialized</h6>
                    </div>
                )
            }}
        </FirebaseContext.Consumer>

    );
}

export default LandingPage;