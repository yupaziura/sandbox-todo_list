import './Loading.scss';

const Loading = () => {
    return (
        <div className="loading">
            <img src={require('../../img/loading.gif')} alt="loading" />
        </div>
    )
}

export default Loading;