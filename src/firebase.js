// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8VRyY78rj8xCfwjl0bnYt1g1R_Wbf5mI", // .env
  authDomain: "myfirstproject-fe555.firebaseapp.com",
  projectId: "myfirstproject-fe555",
  storageBucket: "myfirstproject-fe555.appspot.com",
  messagingSenderId: "115408073095",
  appId: "1:115408073095:web:e5c21e72e64cc3a9db6322"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);