import { db } from './database';
import { useState } from 'react';

import Desk from './components/Desk/Desk';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

import './App.css';

function App() {

  // TO USE DRAG & DROP

  // 1. make card draggable by adding an atribute
  // 2. create onDragOver event for drop areas and prevent default behaviour
  // 3. create onDragStart event for card and use e.transferData.setData('key', value) to store data
  //    The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation.
  // 4. create onDrop to do some actions with data (in my case, change status value by using transferData.getData(key))


  const [data, setData] = useState(db);


  return (
    <div className="App">
      <h1 style={{fontWeight:'bolder'}}> To Do list</h1>
      <Form data={data} setData={setData}/>
        <div className='bord'>
            <Desk setData={setData} taskStatus='todo' color='#4F646F' title='To Do'>
              {
                data.filter(item=>item.status==='todo').map((item, i)=> {
                  return (
                    <Card status={item.status} guid={item.id} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                  )
                })
              }
            </Desk>
            <Desk setData={setData} taskStatus='inProgress' color='#A37B73' title='In progress'>
              {
                  data.filter(item=>item.status==='inProgress').map((item, i)=> {
                    return (
                      <Card status={item.status} guid={item.id} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
                    )
                  })
                }
            </Desk>
            <Desk setData={setData} taskStatus='done' color='#606c38' title='Done'>
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
