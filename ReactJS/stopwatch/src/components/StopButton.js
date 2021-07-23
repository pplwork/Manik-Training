import React from 'react'
import {faStop} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector } from 'react-redux';
function StopButton() {
    const [isActive,intervalID] = useSelector((state)=>[
        state.isActive,
        state.intervalID
    ]);
    const dispatch = useDispatch();
    const handleClick=()=>{
        if(isActive===true){
            document.querySelector('.timer-screen').removeAttribute('style');
            clearInterval(intervalID);
            dispatch({type:'STOP_WATCH'});
        }
    }
    return (
        <div className="Icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faStop} />
        </div>
    )
}

export default StopButton;
