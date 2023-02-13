import './Form.scss';

const Form = ({task, descr, priority}) => {
    return (
        <>
            <form className="form">
                <h2>Create task</h2>

                <div className="form_task form_field">
                    <label className='label' htmlFor="">Task</label>
                    <input size={30} className='form_input' type="text" id='task' value={task}/>
                </div>

                <div className="form_descr form_field">
                    <label className='label' htmlFor="">Description</label>
                    <textarea rows={5} className='form_input' type="text" id='descr'  value={descr}/>
                </div>

                <div className="form_priority form_field">
                    <label className='label' htmlFor="">Priority</label>
                    <select  className='form_input' name="" id="" value={priority}>
                        <option value="unset">- unset -</option>
                        <option value="low">low</option>
                        <option value="middle">middle</option>
                        <option value="high">high</option>
                    </select>
                </div>

                <button className='form_button' type='submit'>Create</button>

            </form>
        </>
    )
}

export default Form;