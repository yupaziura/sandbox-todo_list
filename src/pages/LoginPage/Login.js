// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../../service/firebase';

import './Login.scss';


const Login = ({userId, setUserId}) => {
  const {signInWithGoogle} = useFirebase();

    const navigate = useNavigate();

    const login = () => {
        signInWithGoogle(setUserId).then(()=>{
          navigate('/main')
        })
        
    }

    console.log(userId)

  return (
    <div className='login_page'>
      <div className="content">
        <h1>Welcome to TasksList app!</h1>
        <button className="button" onClick={login}><i className=""></i>Sign in with google</button>
      </div>
    </div>
  )
}

export default Login;