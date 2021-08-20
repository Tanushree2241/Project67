import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDOa7UXBgBDvSlbikCb7L56iPeLdLC_mTg",
    authDomain: "project-67-f45d8.firebaseapp.com",
    projectId: "project-67-f45d8",
    storageBucket: "project-67-f45d8.appspot.com",
    messagingSenderId: "871658101233",
    appId: "1:871658101233:web:e00cf7e0ff87be06334c50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();