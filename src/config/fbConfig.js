import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyBR_MXhHu2EzgG_ObCzU14t1sl-tEBHUQY",
    authDomain: "projectplanner-46f4f.firebaseapp.com",
    databaseURL: "https://projectplanner-46f4f.firebaseio.com",
    projectId: "projectplanner-46f4f",
    storageBucket: "projectplanner-46f4f.appspot.com",
    messagingSenderId: "612837870799"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 