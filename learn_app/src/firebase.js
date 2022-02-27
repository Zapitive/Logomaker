import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCDpHpL22QilHLl3dvwNZA1LX2bCAF-Kaw",
  authDomain: "fir-app-2521c.firebaseapp.com",
  databaseURL: "https://fir-app-2521c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-app-2521c",
  storageBucket: "fir-app-2521c.appspot.com",
  messagingSenderId: "519438334886",
  appId: "1:519438334886:web:642847ae6a61d03d442d67"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref()
export const notesRef = databaseRef.child("notes")
export default firebase