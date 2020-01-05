import app from 'firebase/app';

/* Import Firebase keys */
import * as KEYS from '../../keys/firebaseConfig';

const config = {
    apiKey: KEYS.apiKey,
    authDomain: KEYS.authDomain,
    databaseURL: KEYS.databaseURL,
    projectId: KEYS.projectId,
    storageBucket: KEYS.storageBucket,
    messagingSenderId: KEYS.messagingSenderId,
    appId: KEYS.appId
};

class Firebase {
    constructor(){
        app.initializeApp(config);
    }
}

export default Firebase;