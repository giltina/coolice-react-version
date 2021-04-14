import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBf3E3qY5tjuuHrmldtRUjISqw_WGtsQ5Q",
    authDomain: "coolice-react.firebaseapp.com",
    projectId: "coolice-react",
    storageBucket: "coolice-react.appspot.com",
    messagingSenderId: "51884739467",
    appId: "1:51884739467:web:1436b9254e8be528ccfd8e"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.auth();

export default firebase;