import DeleteButton from '../DeleteButton/DeleteButton';

import './Card.scss';

const Card = ({guid, setData, task, descr, priority}) => {
    const deleteTask = () => {
        setData(d => d.filter(item => item.id !== guid))
    }
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
            </div>
        </>
    )
}

export default Card;