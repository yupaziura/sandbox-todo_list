import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import MainPage from './pages/MainPage/Main';
import Signup from './pages/LoginPage/Signup';
import Login from './pages/LoginPage/Login';

import './App.scss';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Signup/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
