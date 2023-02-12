import Desk from './components/Desk/Desk';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className='bord'>
            <Desk color='blue' title='To Do'>

            </Desk>
            <Desk color='orange' title='In propgres'>

            </Desk>
            <Desk color='green' title='Done'>

            </Desk>
        </div>
    </div>
  );
}

export default App;
