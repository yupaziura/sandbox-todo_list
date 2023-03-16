import { signInWithGoogle } from '../../service/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [userId, setUsetId] = useState('');
    const navigate = useNavigate();

    const login = () => {
        const u = signInWithGoogle();
        setUsetId(u)
    }

    console.log(userId)

  return (
    <div>
      <button className="button" onClick={login}><i className=""></i>Sign in with google</button>
    </div>
  )
}

export default Login;