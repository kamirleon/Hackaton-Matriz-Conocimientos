import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyCjigPCCXS8zkCgjZZkfzTqrTRWQMpFncQ",
  authDomain: "matriz-everis.firebaseapp.com",
  projectId: "matriz-everis",
  storageBucket: "matriz-everis.appspot.com",
  messagingSenderId: "178961418964",
  appId: "1:178961418964:web:a8bf1ed0bc8e54180c4941"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export {db, auth}