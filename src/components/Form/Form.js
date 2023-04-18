import { useState } from 'react';
import { Guid } from 'js-guid';
import { useData } from '../../hooks/useData';

import {ReactComponent as Close} from '../../img/icons/clear.svg';

import './Form.scss';

const Form = ({data, setData, showModal, setShowModal, visibleForm, setVisibleForm}) => {
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
                setTimeout(()=>setShowModal(false), 4000)      
            })

            setVisibleForm(false);
            document.body.style.overflow = 'unset';
        }
    }

    const closeForm = (e) => {
        e.preventDefault();
        setVisibleForm(false);
        document.body.style.overflow = 'unset';
    }

  
    return (
        <>
            <form onClick={(e)=>e.stopPropagation()} className={`form ${visibleForm? '' : 'visisbleFasle'}`}>
                <div className="form_header">
                    <h2 className='form_title'>Create task</h2>
                    <Close className='form_close' onClick={(e) => closeForm(e)}/>
                </div>

                <div className="form_container">
                    <div className="form_task form_field">
                        <label className='label' htmlFor="">Task</label>
                        <input onChange={(e)=> setTask(e.target.value)} size={30} className='form_input' type="text" id='task' value={task}/>
                    </div>

                    <div className="form_descr form_field">
                        <label className='label' htmlFor="">Description</label>
                        <input onChange={(e)=> setDescr(e.target.value)} className='form_input' type="text" id='descr'  value={descr}/>
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
                <div className="button_block">
                    <button onClick={(e)=> submitForm(e)} className='form_button' type='submit'>Create</button>
                    <button onClick={(e)=> closeForm(e)} className='form_button close' >Close</button>
                </div>

            </form>
        </>
    )
}

export default Form;