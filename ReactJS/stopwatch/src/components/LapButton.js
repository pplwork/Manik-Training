import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector } from 'react-redux';
function LapButton() {
    const [isPaused,isActive] = useSelector((state)=>[
        state.isPaused,
        state.isActive
    ]);
    const dispatch = useDispatch();
    const handleClick=()=>{
        if(isActive&&!isPaused){
            dispatch({type:'LAPS'});
        }
    }
    return (
        <div className="Icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faStopwatch} />
        </div>
    )
}

export default LapButton;