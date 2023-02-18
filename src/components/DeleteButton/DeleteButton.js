import './DeleteButton.scss';

const DeleteButton = ({deleteTask}) => {
    return (
        <>
            <div onClick={()=> deleteTask()} className="delete"></div>
        </>
    )
}

export default DeleteButton;