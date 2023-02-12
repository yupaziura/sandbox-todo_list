import './Desk.scss';

const Desk = (props) => {
    return (
        <>
          <div className='desk' style={{backgroundColor: `${props.color}`}}>
                <h2>{props.title}</h2>
                {props.children}
          </div>  
        </>
    )
}

export default Desk;