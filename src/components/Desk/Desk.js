import { useState } from 'react';
import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  ref, set
} from "firebase/database";

import Card from '../Card/Card';
import Sort from '../Sort/Sort';

import './Desk.scss';

const Desk = ({color, title, taskStatus, setData, data, visible}) => {
  const sortOrder = ['low', 'middle', 'high'];
  const [sort, setSort] = useState('default');

  const firebaseConfig = {
    apiKey: "AIzaSyCzLwQ6Hu_G40-bW7-5dw_KGAfIHsKnZE8",
    authDomain: "to-do-list-73624.firebaseapp.com",
    databaseURL: "https://to-do-list-73624-default-rtdb.firebaseio.com",
    projectId: "to-do-list-73624",
    storageBucket: "to-do-list-73624.appspot.com",
    messagingSenderId: "313748834324",
    appId: "1:313748834324:web:59e014c5c2f7e59750ff01"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  const getData = ref(database);

  const drop = (e, status) => {
    let id = e.dataTransfer.getData('id');
    const updatedData = data.map((item, i) => {
      const updatedTask = item.id.StringGuid === id? {...item, status: status} : item
      set(child(getData, `tasks/${item.id.StringGuid}`), updatedTask)
      return updatedTask
      })

  setData(updatedData)
      setData(data=> data.map(item => {
        return item.id.StringGuid?.toString() === id?.toString()? {...item, status: status} : item
      }))
  }
    return (
        <>
        {/* 2. create onDragOver event for drop areas and prevent default behaviour
        4. create onDrop to do some actions with data (in my case, change status value by using transferData.getData(key)) */}
          <div  onDragOver={(e)=> {e.preventDefault()}} 
                onDrop={(e)=>{drop(e, taskStatus)}}
                className={`desk ${!visible? 'visisbleFasle' : null}`}
                style={{backgroundColor: `${color}`}}
          >
            <h2>{title}</h2>
            <Sort setSort={setSort}/>

            {
            data?.filter(item=>item?.status===taskStatus)
                .sort((a, b)=> sort === 'ascending'?  sortOrder.indexOf(a.priority) - sortOrder.indexOf(b.priority) :  sort === 'descending'? sortOrder.indexOf(b.priority) - sortOrder.indexOf(a.priority) : 0)
                .map((item, i)=> {
              return (
                <Card data={data} status={item.status} guid={item.id.StringGuid} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
              )
            })
          }
          </div>  
        </>
    )
}

export default Desk;