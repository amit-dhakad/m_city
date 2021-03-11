import 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export { firebase, firebaseMatches };
