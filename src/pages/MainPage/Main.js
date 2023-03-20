import { useState, useEffect } from 'react';
import {child,get} from "firebase/database";
import { getData } from '../../service/firebase';
import { useFetchData } from '../../service/fetchData';
import { useRequest } from '../../hooks/http.hook';

import Desk from '../../components/Desk/Desk';
import Form from '../../components/Form/Form';
import ModalWindow from '../../components/Modal/Modal';

import './Main.scss';

function MainPage({data, setData}) {
  const [showModal, setShowModal] = useState(false);
  const action = useFetchData();

  const {loading, error, request} = useRequest(action);



  useEffect(() => {
    // const fetchData = () => {
    //   const newArr = [];
    //   get(child(getData, `/tasks/${localStorage.getItem('userId')}`)).then((snapshot) => {
    //     const fetched = snapshot.val();
    //     return fetched;
    //   }).then(val=>{
    //     console.log(val)
    //     if(val){
    //       for(let value of Object.entries(val)){
    //         newArr.push(value[1]);
    //         setData(newArr)  
    //       }
    //     }
    //     else{
    //       setData([])
    //     }
    //   }); 
    // };
    // fetchData();
     const  test =  request().then( d=> {
       console.log(d);
       setData(d);
     })
  }, []);

  // console.log(data)




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
          loading?
          <p>loading</p>
          :
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
