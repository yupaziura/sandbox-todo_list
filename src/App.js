import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { useState } from 'react';

import MainPage from './pages/MainPage/Main';
import Signup from './pages/LoginPage/Signup';
import Login from './pages/LoginPage/Login';

import './App.scss';

function App() {

  const [data, setData] = useState();
  // const [userId, setUserId] = useState(localStorage.getItem('userId')? localStorage.getItem('userId') : null);
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Signup/>}/> */}
        <Route path='/' element={<Login data={data} setData={setData} />}/>
        <Route path='/main' element={<MainPage data={data} setData={setData} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
