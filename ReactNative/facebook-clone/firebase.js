import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASLAyqyJwDlZtQTWm7BWixXrzaumkbRLk",
  authDomain: "facebook-clone-4ae37.firebaseapp.com",
  projectId: "facebook-clone-4ae37",
  storageBucket: "facebook-clone-4ae37.appspot.com",
  messagingSenderId: "864248101206",
  appId: "1:864248101206:web:7cecc7bc8ac97ffa203ef7",
  measurementId: "G-JQFFJC4YDC",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
