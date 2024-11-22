import {Input} from 'antd';
import './Searcher.css'

function Searcher({loading}) {
    return <Input.Search placeholder="Buscar..." disabled={loading}/>
}

export {Searcher};