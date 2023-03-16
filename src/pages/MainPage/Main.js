import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import {
  child,
  get,
  getDatabase,
  ref,
} from "firebase/database";

import Desk from '../../components/Desk/Desk';
import Form from '../../components/Form/Form';
import ModalWindow from '../../components/Modal/Modal';

import './Main.scss';

function MainPage() {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);


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

  useEffect(() => {
    const fetchData = () => {
      const newArr = [];
      get(child(getData, "/tasks")).then((snapshot) => {
        const fetched = snapshot.val();
        return fetched;
      }).then(val=>{
        console.log(val)
        if(val){
          for(let value of Object.entries(val)){
            newArr.push(value[1]);
            setData(newArr)  
          }
        }
        else{
          setData([])
        }
      }); 
    };
    fetchData();
  }, [database, getData]);




  // TO USE DRAG & DROP

  // 1. make card draggable by adding an atribute
  // 2. create onDragOver event for drop areas and prevent default behaviour
  // 3. create onDragStart event for card and use e.transferData.setData('key', value) to store data
  //    The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation.
  // 4. create onDrop to do some actions with data (in my case, change status value by using transferData.getData(key))


  const [visibleDesk, setvisibleDesk] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

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
      {
        showModal? 
        <ModalWindow response={'All done!'}/>
          :
        null
      }
      <h1 style={{fontWeight:'bolder'}}> To Do list</h1>
      <button className='openButton form_button' onClick={()=>setVisibleForm(visibleDesk=>!visibleDesk)}>{!visibleForm? 'create new task' : 'hide'}</button>
      <Form visibleForm={visibleForm} data={data} setData={setData} showModal={showModal} setShowModal={setShowModal}/>
      <div className='bord'>
        {
          deskData.map(({taskStatus, color, title, visible}, i)=>{
            return (
              <div className='desk_container' key={i}>
                {
                  title === 'Archive'?
                  <button className='openButton' onClick={()=>setvisibleDesk(visibleDesk=>!visibleDesk)}>{!visible? 'show archive' : 'hide archive'}</button>
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

export default MainPage;
