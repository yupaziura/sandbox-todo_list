import { db } from './database';

import Desk from './components/Desk/Desk';
import Card from './components/Card/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{fontWeight:'bolder'}}> To Do list</h1>
        <div className='bord'>
            <Desk color='#4F646F' title='To Do'>
              {
                db.todo.map((item, i)=> {
                  return (
                    <Card task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                  )
                })
              }
            </Desk>
            <Desk color='#A37B73' title='In progress'>
              {
                  db.inProgress.map((item, i)=> {
                    return (
                      <Card task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                    )
                  })
                }
            </Desk>
            <Desk color='#606c38' title='Done'>
              {
                  db.done.map((item, i)=> {
                    return (
                      <Card task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                    )
                  })
                }
            </Desk>
        </div>
    </div>
  );
}

export default App;
