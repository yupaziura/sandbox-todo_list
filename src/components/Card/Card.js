import './Card.scss';

const Card = ({task, descr, priority}) => {
    return (
        <>
            <div className="card">
                <h3>{task}</h3>
                <p>{descr}</p>

                <div className={`priority ${priority}`}>
                    {priority}
                </div>
            </div>
        </>
    )
}

export default Card;