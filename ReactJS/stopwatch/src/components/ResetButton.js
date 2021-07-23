import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRedo} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function ResetButton(props) {
    const isPaused = useSelector((state)=>state.isPaused);
    const dispatch = useDispatch();
    const handleClick=()=>{
        if(isPaused){
            dispatch({type:'RESET_WATCH'});
        }
    }
    return (
        <div className="Icon"  onClick={handleClick}>
            <FontAwesomeIcon icon={faRedo}/>
        </div>
    )
}

export default ResetButton;