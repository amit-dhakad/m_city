import 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
firebaseDB
  .ref('matches')
  .once('value')
  .then((snapshot) => {
    console.log('snapshot: ', snapshot.val());
  });
