import DeleteButton from '../DeleteButton/DeleteButton';

import './Card.scss';

const Card = ({task, descr, priority}) => {
    return (
        <>
            <div className="card">
                <div className="card_top">
                    <h3>{task}</h3>
                    <DeleteButton/>
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