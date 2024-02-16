import {createContext, useContext} from "react";
import {initializeApp} from "firebase/app"
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database"

const firebaseContext = createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyD8DIkViU_QKMRdgcwJtspIPuk7JkXkGcY",
    authDomain: "mynewapp-8b919.firebaseapp.com",
    projectId: "mynewapp-8b919",
    storageBucket: "mynewapp-8b919.appspot.com",
    messagingSenderId: "329007408441",
    appId: "1:329007408441:web:60a10f851a0af7dce2f4e8",
    databaseURL: "https://mynewapp-8b919-default-rtdb.firebaseio.com/",

  };
export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export const authStateChanged = onAuthStateChanged();
export const useFirebase = () => useContext(firebaseContext);

export const FirebaseProvider = (props) =>{
    const signupuserwithemailandpassword = (email, password) =>{
      return  createUserWithEmailAndPassword(firebaseAuth, email, password).then((value)=>{
            alert ("success signed up", value)
        }).catch((err)=>{
            console.log(err);
        })
    }
    const putData = (key, data) =>{
        set(ref(database, key), data);
    }
    const signUpWithGoogle = () =>{
        signInWithPopup(firebaseAuth, googleProvider);
    }
    return (
        <firebaseContext.Provider value={{signupuserwithemailandpassword, putData, signUpWithGoogle, authStateChanged, firebaseApp}}>
            {props.children}
        </firebaseContext.Provider>
    )
}