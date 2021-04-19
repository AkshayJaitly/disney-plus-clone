import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUXp0z8x4PA1cZV7StnTG8HGvEsxomp3U",
  authDomain: "inspired-fact-200600.firebaseapp.com",
  projectId: "inspired-fact-200600",
  storageBucket: "inspired-fact-200600.appspot.com",
  messagingSenderId: "376536471085",
  appId: "1:376536471085:web:bf3788a41cffd1137c8aa4",
  measurementId: "G-WEYB0EWMKY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
