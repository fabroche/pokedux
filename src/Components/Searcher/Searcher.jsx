import {Input} from 'antd';
import './Searcher.css'
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../slices/dataSlice.js";

function Searcher({loading}) {
    const dispatch = useDispatch()

    function onSearch(e) {
        dispatch(setSearchValue(e.target.value))
    }

    return <Input.Search
        placeholder="Buscar..."
        disabled={loading}
        onChange={onSearch}
    />
}

export {Searcher};