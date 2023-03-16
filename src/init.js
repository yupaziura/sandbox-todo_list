import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCzLwQ6Hu_G40-bW7-5dw_KGAfIHsKnZE8",
    authDomain: "to-do-list-73624.firebaseapp.com",
    databaseURL: "https://to-do-list-73624-default-rtdb.firebaseio.com",
    projectId: "to-do-list-73624",
    storageBucket: "to-do-list-73624.appspot.com",
    messagingSenderId: "313748834324",
    appId: "1:313748834324:web:59e014c5c2f7e59750ff01"
  };

 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;