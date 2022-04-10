import React from 'react';
import logo from './logo.svg';
import './App.css';
import initializeApp from './firebase.js';
import Register from './Component/Register/register';
import LogIn from './Component/log-In/LogIn';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';


const firebaseAuth = firebase.auth();


function App() {
  const [user] = useAuthState(firebaseAuth);
  const [auth, setAuth] = React.useState(null);
  React.useEffect(()=>{
    setAuth(firebaseAuth)
  },[])

  const singInWhitGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
  }

  return (
    <div className="App">
      <LogIn />
      <Register />
    </div>
  );
}

export default App;
