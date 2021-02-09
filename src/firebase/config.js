import firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initializing Firebase services we need
const projectFirestore = firebase.firestore();
// Special type of timestamp data that Firebase uses in Firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Exporting Firebase services for future use
export { projectFirestore, timestamp };
