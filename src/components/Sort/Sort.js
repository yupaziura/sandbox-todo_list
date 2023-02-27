import './Sort.scss';

const Sort = ({setSort}) => {
    
    return (
        <div className='sort_container'>
            <h2>Sort</h2>
            <select onChange={(e)=> setSort(e.target.value)} className='sort' name="" id="">
                <option value="default">default</option>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
            </select>
        </div>
    )
}

export default Sort;