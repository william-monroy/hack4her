import firebase from "firebase"

import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAqoo9E1Iu5ee7jTC1vkofQqKAgrGMqMvM",
    authDomain: "coneeq-code-along.firebaseapp.com",
    projectId: "coneeq-code-along",
    storageBucket: "coneeq-code-along.appspot.com",
    messagingSenderId: "594238585125",
    appId: "1:594238585125:web:9f91ecaba842e8257782cc",
    measurementId: "G-M5XL4DP76S"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export default {
    firebase,
    auth,
    db
};