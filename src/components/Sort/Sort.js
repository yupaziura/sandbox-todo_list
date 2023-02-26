import './Sort.scss';

const Sort = () => {
    return (
        <div className='sort_container'>
            <select className='sort' name="" id="">
                <option value="default">default</option>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
            </select>
        </div>
    )
}

export default Sort;