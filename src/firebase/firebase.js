import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDwfwfV7SZuvhgbhhWWYgN5QZ92mTSZtS4",
  authDomain: "chaka-21fbb.firebaseapp.com",
  databaseURL: "https://chaka-21fbb.firebaseio.com",
  projectId: "chaka-21fbb",
  storageBucket: "chaka-21fbb.appspot.com",
  messagingSenderId: "830301700851",
  appId: "1:830301700851:web:e1d674e51c3d33b183ad86",
  measurementId: "G-6D8VEDZ8NC"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  class Firebase {
    constructor() {
      this.auth = firebase.auth();
      this.database = firebase.database();
    }

    async signin(email, password) {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
      });
      
      return user;

    }

    async login(email, password) {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
      });

      return user;

    }

    async logout() {
      const logout = await firebase.auth().signOut().catch(err => {
        console.log(err);
      });
      return logout;
    }

    async getUserState() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve);
      });
    }

    async createShedule(post){
      let newSchedule = {
        startTime: post.startDate,
        endTime: post.endDate, 
        day: post.day,
        duration: post.duration,
        clinic: post.clinic
      }

      const firebaseSchedule = await firebase.database().ref("DoctorSchedules").update(newSchedule).catch(err => {
        console.log(err);
      });

      return firebaseSchedule;
    }
  }

  export default new Firebase();