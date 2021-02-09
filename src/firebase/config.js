import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCMR-h04L3I71W3IOxq7af3r-_uhES-EM8',
  authDomain: 'the-group---tasks-tracker.firebaseapp.com',
  databaseURL: 'https://the-group---tasks-tracker.firebaseio.com',
  projectId: 'the-group---tasks-tracker',
  storageBucket: 'the-group---tasks-tracker.appspot.com',
  messagingSenderId: '1013793128046',
  appId: '1:1013793128046:web:7920ad7ec0bb2a3e2f707f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initializing Firebase services we need
const projectFirestore = firebase.firestore();
// Special type of timestamp data that Firebase uses in Firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Exporting Firebase services for future use
export { projectFirestore, timestamp };
