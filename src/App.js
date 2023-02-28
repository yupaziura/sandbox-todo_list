import { db } from './database';
import { useState } from 'react';

import Desk from './components/Desk/Desk';
import Form from './components/Form/Form';
import Sort from './components/Sort/Sort';

import './App.css';

function App() {

  // TO USE DRAG & DROP

  // 1. make card draggable by adding an atribute
  // 2. create onDragOver event for drop areas and prevent default behaviour
  // 3. create onDragStart event for card and use e.transferData.setData('key', value) to store data
  //    The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation.
  // 4. create onDrop to do some actions with data (in my case, change status value by using transferData.getData(key))


  const [data, setData] = useState(db);
  const [sort, setSort] = useState('default');



  return (
    <div className="App">
      <h1 style={{fontWeight:'bolder'}}> To Do list</h1>
      <Form data={data} setData={setData}/>
      <Sort setSort={setSort}/>
      <div className='bord'>
          <Desk sort={sort} data={data} setData={setData} taskStatus='todo' color='#4F646F' title='To Do'/>
          <Desk sort={sort} data={data} setData={setData} taskStatus='inProgress' color='#A37B73' title='In progress'/>
          <Desk sort={sort} data={data} setData={setData} taskStatus='done' color='#606c38' title='Done'/>

      </div>
    </div>
  );
}

export default App;
