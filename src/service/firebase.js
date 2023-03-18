import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getDatabase, ref} from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyCzLwQ6Hu_G40-bW7-5dw_KGAfIHsKnZE8",
    authDomain: "to-do-list-73624.firebaseapp.com",
    databaseURL: "https://to-do-list-73624-default-rtdb.firebaseio.com",
    projectId: "to-do-list-73624",
    storageBucket: "to-do-list-73624.appspot.com",
    messagingSenderId: "313748834324",
    appId: "1:313748834324:web:59e014c5c2f7e59750ff01"
  };

 
export const app = initializeApp(firebaseConfig);

 const database = getDatabase(app);

 export const getData = ref(database);


export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setId) => {
  signInWithPopup(auth, provider)
      .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          const user = result.user;
          localStorage.setItem('userId', user.uid)
          console.log(user);
          return user;
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage, email, credential);
      });
}