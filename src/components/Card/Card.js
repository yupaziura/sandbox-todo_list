import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  ref, remove
} from "firebase/database";


import DeleteButton from '../DeleteButton/DeleteButton';

import './Card.scss';

const Card = ({status, guid, setData, task, descr, priority}) => {
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
    
    const deleteTask = () => {
        remove(child(getData, `tasks/${guid}`))
        setData(d => d.filter(item => item.id.StringGuid !== guid))
    }
    const changeStatus = (value) => {
        setData(data => data.map((item, i) => {
            return item.id.StringGuid === guid? {...item, status: value} : item
            }
        ))}

    const onStart = (e) => {
        e.dataTransfer.setData('id', guid)
    }
    
    return (
        <>
            {/* 1. make card draggable by adding an atribute
            3. create onDragStart event for card and use e.transferData.setData('key', value) to store data */}
            <div className="card" draggable onDragStart={(e)=> {onStart(e)}}>
                <div className="card_top">
                    <h3>{task}</h3>
                    <DeleteButton deleteTask={deleteTask}/>
                </div>
                <p>{descr}</p>

                <div className={`priority ${priority}`}>
                    {priority}
                </div>

                <div className="status">
                    <label className='label' htmlFor="">Status</label>
                    <select onChange={(e)=>{changeStatus(e.target.value)}}  className='status_label'  id="" value={status}>
                        <option value="todo">to do</option>
                        <option value="inProgress">in progress</option>
                        <option value="done">done</option>
                        <option value="archive">archive</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Card;