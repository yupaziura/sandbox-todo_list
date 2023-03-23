// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../../service/firebase';


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
    <div>
      <button className="button" onClick={login}><i className=""></i>Sign in with google</button>
    </div>
  )
}

export default Login;