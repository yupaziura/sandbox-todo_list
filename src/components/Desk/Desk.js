import { useState } from 'react';
import { useData } from '../../hooks/useData';

import Card from '../Card/Card';
import Sort from '../Sort/Sort';

import './Desk.scss';

const Desk = ({color, title, taskStatus, setData, data, visible}) => {
  const sortOrder = ['low', 'middle', 'high'];
  const [sort, setSort] = useState('default');
  const {updateData} = useData();


  const drop = (e, status) => {
    let id = e.dataTransfer.getData('id');
    updateData(status, data, id).then(res=>setData(res))
  }
  return (
      <>
      {/* 2. create onDragOver event for drop areas and prevent default behaviour
      4. create onDrop to do some actions with data (in my case, change status value by using transferData.getData(key)) */}
        <div  onDragOver={(e)=> {e.preventDefault()}} 
              onDrop={(e)=>{drop(e, taskStatus)}}
              className={`desk ${!visible? 'visisbleFasle' : ''}`}
              style={{border: ` 2px solid ${color}`, boxShadow: `0 0 10px ${color}`}}
        >
          <h2 className='desk_title'>{title}</h2>
          <Sort setSort={setSort}/>
          <hr style={{border: ` 1px solid ${color}`, boxShadow: `0 0 10px ${color}`}} className='divider'/>

          {
          data?.filter(item=>item?.status===taskStatus)
              .sort((a, b)=> sort === 'ascending'?  sortOrder.indexOf(a.priority) - sortOrder.indexOf(b.priority) :  sort === 'descending'? sortOrder.indexOf(b.priority) - sortOrder.indexOf(a.priority) : 0)
              .map((item, i)=> {
            return (
              <Card date={item.date} data={data} status={item.status} guid={item.id.StringGuid} setData={setData} task={item.task} descr={item.descr} priority={item.priority} key={i}/>
            )
          })
        }
        </div>  
      </>
  )
}

export default Desk;