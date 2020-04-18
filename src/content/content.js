import firebase from 'firebase';


   export  const config =  {
    apiKey: "AIzaSyDonAd952zKtrya0hOAHrQ7BjAZAh3d2EE",
    authDomain: "tetde-a372f.firebaseapp.com",
    databaseURL: "https://tetde-a372f.firebaseio.com",
    projectId: "tetde-a372f",
    storageBucket: "tetde-a372f.appspot.com",
    messagingSenderId: "919423475045",
    appId: "1:919423475045:web:aa5e965a844344786b958c"
  };
  const fire = firebase.initializeApp(config);
export default fire;

