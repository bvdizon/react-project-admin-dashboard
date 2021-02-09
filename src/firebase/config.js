import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBLtWUut-HyngxMaCFM29gwxiNilZrL81o',
  authDomain: 'thegroup-report-site.firebaseapp.com',
  projectId: 'thegroup-report-site',
  storageBucket: 'thegroup-report-site.appspot.com',
  messagingSenderId: '1017009916753',
  appId: '1:1017009916753:web:2c92a01fc092221fc7a170',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initializing Firebase services we need
const projectFirestore = firebase.firestore();
// Special type of timestamp data that Firebase uses in Firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Exporting Firebase services for future use
export { projectFirestore, timestamp };
