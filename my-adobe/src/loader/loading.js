import loading from '../resources/gifs/loading.gif'
import tool from '../resources/gifs/tool-handy.gif'
import './loader.css'
function Loading(){
    return <div className="loader-wrapper">
        <img className="worker" src={tool}  alt="loading" />
        <img src={loading}  alt="loading" />
        <p>
          Working on it...
        </p>

    </div>
}

export default Loading;