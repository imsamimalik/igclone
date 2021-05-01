import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJQvvadNdu0jk0opSXRi8Yf66epwrzTjY",
    authDomain: "igbysami.firebaseapp.com",
    projectId: "igbysami",
    storageBucket: "igbysami.appspot.com",
    messagingSenderId: "891011389749",
    appId: "1:891011389749:web:11d009f11b5f3a1ea5d47c",
    measurementId: "G-FSNV9BZ9M9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
