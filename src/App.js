// import './App.css';
// import { useState, useEffect } from 'react';
// import { firebaseApp, useFirebase } from './context/firebase';
// // import {app} from "firebase"
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // import { FirebaseApp } from 'firebase/app';
// import { authStateChanged } from './context/firebase';

// const auth =getAuth(firebaseApp);
// function App() {
//   const firebase = useFirebase();
//   console.log(firebase);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(()=>{
//   authStateChanged(auth, user =>{
//     if(user){
//       console.log("hello", user);
//     }
//     else{
//       console.log("youre logged out")
//     }
//   })
//   },
//   []);
//   return (
//     <div className="App">
//       <h1>new react firebase app</h1>
//       <input type="email" placeholder='enter your email' onChange={e => setEmail(e.target.value)} value={email} />
//       <input type="password" placeholder='enter your password' onChange={e=> setPassword(e.target.value)} value={password} />
//       <button onClick={()=>{
//         firebase.signupuserwithemailandpassword(email, password);
//         firebase.putData("users/" + "marmik", {email, password});
//       }}>signup</button>
//       <br/>
//       <button onClick={firebase.signUpWithGoogle}>sign in with google</button>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import './App.css';
import { FirebaseProvider, useFirebase } from './context/firebase';

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    authStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log('Hello:', user);
      } else {
        console.log('You\'re logged out.');
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>New React Firebase App</h1>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={() => firebase.signupuserwithemailandpassword(email, password)}>
        Signup
      </button>
      <br />
      <button onClick={firebase.signUpWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default App;

// Wrap your entire app with the FirebaseProvider
// ReactDOM.render(
//   <FirebaseProvider>
//     <App />
//   </FirebaseProvider>,
//   document.getElementById('root')
// );
