import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import MainPage from './pages/Main Page/Main';
import Login from './pages/Login Page/Login';

import './App.scss';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
