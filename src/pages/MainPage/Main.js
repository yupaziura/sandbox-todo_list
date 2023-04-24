import { useState, useEffect } from 'react';
import { useData } from '../../hooks/useData';
import {useFirebase} from '../../service/firebase';
import { useNavigate } from 'react-router-dom';

import Desk from '../../components/Desk/Desk';
import Form from '../../components/Form/Form';
import ModalWindow from '../../components/Modal/Modal';
import Loading from '../../components/Loading/Loading';
import {ReactComponent as Logout} from '../../img/icons/logout.svg';

import './Main.scss';

function MainPage({data, setData}) {
  const [showModal, setShowModal] = useState(false);
  const {fetchData, loading} = useData();
  const {signOutWithGoogle} = useFirebase();
  const navigate = useNavigate();



  useEffect(() => {
    fetchData().then( d=> {
       setData(d);
     })
  }, []);


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
      color: '#620de0',
      taskStatus: 'todo',
      title: 'To Do',
      visible: true
    },
    {
      color: '#0dbde0',
      taskStatus: 'inProgress',
      title: 'In progress',
      visible: true
    },
    {
      color: '#e00dcf',
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

  const showForm = () => {
    setVisibleForm(visibleDesk=>!visibleDesk);
    document.body.style.overflow = 'hidden';
  }

  const out = () => {
    signOutWithGoogle().then((data=> {
      console.log(data);
      navigate('/')
    }))
  }

  return (
    <div className={`App`} onClick={()=>setVisibleForm(false)}>
      <Form setVisibleForm={setVisibleForm} visibleForm={visibleForm} data={data} setData={setData} showModal={showModal} setShowModal={setShowModal}/>
      {
        showModal? 
        <ModalWindow response={'All done!'}/>
          :
        null
      }
      <div className={`wrapper ${visibleForm || showModal? 'shaded' : null}`} onClick={(e)=>e.stopPropagation()}>
        <div className="header">
          <h1 style={{fontWeight:'200', color: 'white', fontSize: '50px', margin: '10px 0 20px '}}> To Do list</h1>
          <button onClick={out}><Logout/></button>
        </div>
        <div className="buttons">
          <button className='openButton form_button' onClick={()=>showForm()}>{!visibleForm? 'create new task' : 'hide'}</button>
          <button className='openButton ' onClick={()=>setvisibleDesk(visibleDesk=>!visibleDesk)}>{!visibleDesk? 'show archive' : 'hide archive'}</button>
        </div>
        <div className='bord'>
          {
            loading?
            <Loading/>
            :
            deskData.map(({taskStatus, color, title, visible}, i)=>{
              return (
                <div className='desk_container' key={i}>
                  <Desk data={data} setData={setData} taskStatus={taskStatus} color={color} title={title} visible={visible}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default MainPage;
