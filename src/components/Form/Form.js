import { useState } from 'react';
import { Guid } from 'js-guid';
import { useData } from '../../hooks/useData';

import './Form.scss';

const Form = ({data, setData, showModal, setShowModal, visibleForm}) => {
    const [task, setTask] = useState('');
    const [descr, setDescr] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);


    const {pushData} = useData();

    
    const submitForm = (e) => {
        e.preventDefault();
        
        if(!task) {
            alert('Create task')
        }
        else if (!priority || priority === 'unset') {
            alert('Choose the priority')
        }
        else if (new Date(date) < new Date().setHours(0,0,0,0)) {
            alert('Set proper due date')
        }
        else {
            const guid = Guid.newGuid();

            
            const newItem = {
                id: guid,
                'task': task,
                'descr': descr,
                'priority' : priority,
                'status': 'todo',
                'date': date
            }

            pushData(newItem, guid).then(()=> {
                setShowModal(true);
                setData([...data, newItem])
                setTask('');
                setDescr('');
                setPriority('');
                setDate(new Date().toISOString().split('T')[0]);
                setTimeout(()=>setShowModal(false), 2000)      
            })

            
        }
    }

  
    return (
        <>
            <form className={`form ${visibleForm? '' : 'visisbleFasle'}`}>
                <h2>Create task</h2>

                <div className="form_container">
                <div className="form_task form_field">
                    <label className='label' htmlFor="">Task</label>
                    <input onChange={(e)=> setTask(e.target.value)} size={30} className='form_input' type="text" id='task' value={task}/>
                </div>

                <div className="form_descr form_field">
                    <label className='label' htmlFor="">Description</label>
                    <textarea onChange={(e)=> setDescr(e.target.value)} rows={5} className='form_input' type="text" id='descr'  value={descr}/>
                </div>

                <div className="form_priority form_field">
                    <label className='label' htmlFor="">Priority</label>
                    <select onChange={(e)=> setPriority(e.target.value)}  className='form_input'  id="" value={priority}>
                        <option value="unset">- unset -</option>
                        <option value="low">low</option>
                        <option value="middle">middle</option>
                        <option value="high">high</option>
                    </select>
                </div>

                <div className=" form_date form_field">
                    <label className='label' htmlFor="">Due date</label>
                    <input value={date} className='form_input' type="date" onChange={(e)=>setDate(e.target.value) }/>
                </div>
                </div>

                <button onClick={(e)=> submitForm(e)} className='form_button' type='submit'>Create</button>

            </form>
        </>
    )
}

export default Form;