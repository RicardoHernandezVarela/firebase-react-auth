import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

        this.auth = app.auth();
        this.db = app.database();
    }

    /* Auth API */

    /* Create new user with email and password */
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    /* Sign in with email and password */
    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    /* Sign out */
    doSignOut = () => this.auth.signOut();

    /* Send email to reset password */
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    /* Update password of current user */
    doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);

    /* User API */

    /* Get specific user */
    user = uid => this.db.ref(`users/${uid}`);

    /* Get all users */
    users = () => this.db.ref('users');
    
}

export default Firebase;