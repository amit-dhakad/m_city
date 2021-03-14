import 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };
