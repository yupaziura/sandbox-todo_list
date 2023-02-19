import { db } from './database';
import { useState } from 'react';

import Desk from './components/Desk/Desk';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

import './App.css';

function App() {
  const [data, setData] = useState(db);


  return (
    <div className="App">
      <h1 style={{fontWeight:'bolder'}}> To Do list</h1>
      <Form data={data} setData={setData}/>
        <div className='bord'>
            <Desk color='#4F646F' title='To Do'>
              {
                data.filter(item=>item.status==='todo').map((item, i)=> {
                  return (
                    <Card status={item.status} guid={item.id} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                  )
                })
              }
            </Desk>
            <Desk color='#A37B73' title='In progress'>
              {
                  data.filter(item=>item.status==='inProgress').map((item, i)=> {
                    return (
                      <Card status={item.status} guid={item.id} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                    )
                  })
                }
            </Desk>
            <Desk color='#606c38' title='Done'>
              {
                  data.filter(item=>item.status==='done').map((item, i)=> {
                    return (
                      <Card status={item.status} guid={item.id} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                    )
                  })
                }
            </Desk>
        </div>
    </div>
  );
}

export default App;
