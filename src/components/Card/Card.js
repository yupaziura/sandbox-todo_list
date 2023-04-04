import { useData } from "../../hooks/useData";

import DeleteButton from '../DeleteButton/DeleteButton';

import './Card.scss';

const Card = ({data, date, status, guid, setData, task, descr, priority}) => {
    const {deleteData, updateData} = useData();
    
    
    const deleteTask = () => {
        deleteData(guid).then(() => setData(d => d.filter(item => item.id.StringGuid !== guid)))
    }

    const changeStatus = (value) => {
        updateData(value, data, guid).then(res => setData(res))
    }

    const onStart = (e) => {
        e.dataTransfer.setData('id', guid)
    }
    
    return (
        <>
            {/* 1. make card draggable by adding an atribute
            3. create onDragStart event for card and use e.transferData.setData('key', value) to store data */}
            <div className={`card ${Math.floor((new Date (date) - new Date()) / (1000*60*60*24)) < 0 && (status !== 'done' && status !== 'archive') ? 'overdue' : Math.floor((new Date (date) - new Date()) / (1000*60*60*24)) < 2 && (status !== 'done' && status !== 'archive')? 'soon' : null}`} draggable onDragStart={(e)=> {onStart(e)}}>
                <div className="card_top">
                    <h3 className="card_title">{task}</h3>
                    <DeleteButton deleteTask={deleteTask}/>
                </div>
                <p className="card_descr">{descr}</p>

                <p className="card_date">Due date: {date}</p>

                {/* <div className={`priority ${priority}`}>
                    {priority}
                </div> */}

                <div className="status">
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