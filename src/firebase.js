// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyD9Re7CcqMQcmaGn_ZY84xBMRmQ_cDppbQ",
    authDomain: "real-time-chat-applicati-9e327.firebaseapp.com",
    databaseURL: "https://real-time-chat-applicati-9e327-default-rtdb.firebaseio.com",
    projectId: "real-time-chat-applicati-9e327",
    storageBucket: "real-time-chat-applicati-9e327.appspot.com",
    messagingSenderId: "838183850427",
    appId: "1:838183850427:web:c3665357f1ee3e5ef9b49e",
    measurementId: "G-L5CP53EYJ2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
