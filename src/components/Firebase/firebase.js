import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBHsMyzmOpT4W8LwnTcuNjW9n_2XkyNBlk",
    authDomain: "cake-factory-86343.firebaseapp.com",
    databaseURL: "https://cake-factory-86343.firebaseio.com",
    projectId: "cake-factory-86343",
    storageBucket: "cake-factory-86343.appspot.com",
    messagingSenderId: "858577807933",
    appId: "1:858577807933:web:08c8c26ceca60e36b21854"
};

class Firebase {
    constructor(){
        app.initializeApp(config);
    }
}

export default Firebase;