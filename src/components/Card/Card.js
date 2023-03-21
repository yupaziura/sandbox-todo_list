import {child, remove, set} from "firebase/database";
import { useFirebase } from "../../service/firebase";

import DeleteButton from '../DeleteButton/DeleteButton';

import './Card.scss';

const Card = ({data, date, status, guid, setData, task, descr, priority}) => {
    const {getData} = useFirebase();
    
    
    const deleteTask = () => {
        remove(child(getData, `tasks/${localStorage.getItem('userId')}/${guid}`))
        setData(d => d.filter(item => item.id.StringGuid !== guid))
    }
    const changeStatus = (value) => {
        const updatedData = data.map((item, i) => {
            const updatedTask = item.id.StringGuid === guid? {...item, status: value} : item
            set(child(getData, `tasks/${localStorage.getItem('userId')}/${item.id.StringGuid}`), updatedTask)
            return updatedTask
            })

        setData(updatedData)}

    const onStart = (e) => {
        e.dataTransfer.setData('id', guid)
    }
    
    return (
        <>
            {/* 1. make card draggable by adding an atribute
            3. create onDragStart event for card and use e.transferData.setData('key', value) to store data */}
            <div className={`card ${Math.floor((new Date (date) - new Date()) / (1000*60*60*24)) < 0 && (status !== 'done' && status !== 'archive') ? 'overdue' : Math.floor((new Date (date) - new Date()) / (1000*60*60*24)) < 2 && (status !== 'done' && status !== 'archive')? 'soon' : null}`} draggable onDragStart={(e)=> {onStart(e)}}>
                <div className="card_top">
                    <h3>{task}</h3>
                    <DeleteButton deleteTask={deleteTask}/>
                </div>
                <p>{descr}</p>

                <p>{date}</p>

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