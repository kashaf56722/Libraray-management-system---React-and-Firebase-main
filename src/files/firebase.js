import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVuhwkL3Jdc3UzFdfEFOzzg9fVhnvKQtY",
    authDomain: "librarymanagement-9f248.firebaseapp.com",
    projectId: "librarymanagement-9f248",
    storageBucket: "librarymanagement-9f248.appspot.com",
    messagingSenderId: "28584509444",
    appId: "1:28584509444:web:66164c1d8226b7595cf551",
    measurementId: "G-ND09N7HE43"
  };
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;