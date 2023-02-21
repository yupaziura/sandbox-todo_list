import { useState } from 'react';
import nextId from "react-id-generator";

import './Form.scss';

const Form = ({data, setData}) => {
    const [task, setTask] = useState('');
    const [descr, setDescr] = useState('');
    const [priority, setPriority] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if(!task) {
            alert('Create task')
        }
        else if(!descr) {
            alert('Write description')
        }
        else if (!priority || priority === 'unset') {
            alert('Choose the priority')
        }
        else {
            const newItem = {
                id: nextId(),
                'task': task,
                'descr': descr,
                'priority' : priority,
                'status': 'todo'
            };
            setData([...data, newItem])
            setTask('');
            setDescr('');
            setPriority('')    
        }
    }

  
    return (
        <>
            <form className="form">
                <h2>Create task</h2>

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

                <button onClick={(e)=> submitForm(e)} className='form_button' type='submit'>Create</button>

            </form>
        </>
    )
}

export default Form;