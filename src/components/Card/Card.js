import DeleteButton from '../DeleteButton/DeleteButton';

import './Card.scss';

const Card = ({status, guid, setData, task, descr, priority}) => {
    const deleteTask = () => {
        setData(d => d.filter(item => item.id !== guid))
    }
    const changeStatus = (value) => {
        setData(data => data.map((item, i) => {
            return item.id === guid? {...item, status: value} : item
            }
        ))}
    
    return (
        <>
            <div className="card">
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
                    </select>
                </div>
            </div>
        </>
    )
}

export default Card;