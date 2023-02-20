import './Desk.scss';

const Desk = (props) => {
  const drop = (e, status) => {
    let id = e.dataTransfer.getData('id');
      props.setData(data=> data.map(item => {
        return item.id === id? {...item, status: status} : item
      }))
  }
    return (
        <>
        {/* 2. create onDragOver event for drop areas and prevent default behaviour
        4. create onDrop to do some actions with data (in my case, change status value by using transferData.getData(key)) */}
          <div  onDragOver={(e)=> {e.preventDefault()}} 
                onDrop={(e)=>{drop(e, props.taskStatus)}}
                className='desk' 
                style={{backgroundColor: `${props.color}`}}
          >
                <h2>{props.title}</h2>
                {props.children}
          </div>  
        </>
    )
}

export default Desk;