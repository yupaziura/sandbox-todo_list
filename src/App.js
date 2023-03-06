import { db } from './database';
import { useState } from 'react';

import Desk from './components/Desk/Desk';
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
  const [visibleDesk, setvisibleDesk] = useState(false);

  const deskData =  [
    {
      color: '#4F646F',
      taskStatus: 'todo',
      title: 'To Do',
      visible: true
    },
    {
      color: '#A37B73',
      taskStatus: 'inProgress',
      title: 'In progress',
      visible: true
    },
    {
      color: '#606c38',
      taskStatus: 'done',
      title: 'Done',
      visible: true
    },
    {
      color: 'grey',
      taskStatus: 'archive',
      title: 'Archive',
      visible: visibleDesk
    }
  ]

  return (
    <div className="App">
      <h1 style={{fontWeight:'bolder'}}> To Do list</h1>
      <Form data={data} setData={setData}/>
      <div className='bord'>
        {
          deskData.map(({taskStatus, color, title, visible}, i)=>{
            return (
              <div key={i}>
                {
                  title === 'Archive'?
                  <button onClick={()=>setvisibleDesk(visibleDesk=>!visibleDesk)}>show archive</button>
                  : null
                }
                <Desk data={data} setData={setData} taskStatus={taskStatus} color={color} title={title} visible={visible}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
