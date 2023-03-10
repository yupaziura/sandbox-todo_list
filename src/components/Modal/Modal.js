import './Modal.scss';

const ModalWindow = ({response}) => {
    return (
        <div className='modal'>
            <p className='response'>{response}</p>
        </div>
    )
}

export default ModalWindow;