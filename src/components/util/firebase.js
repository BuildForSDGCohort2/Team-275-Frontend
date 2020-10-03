import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAfil9MAdKW6-MGW9MEbyem3U0fj1n1PB8",
  authDomain: "online-health-therapy.firebaseapp.com",
  databaseURL: "https://online-health-therapy.firebaseio.com",
  projectId: "online-health-therapy",
  storageBucket: "online-health-therapy.appspot.com",
  messagingSenderId: "205232997618",
  appId: "1:205232997618:web:ae50574104ce555d02bc6b",
  measurementId: "G-B7XP7YS1P0"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;