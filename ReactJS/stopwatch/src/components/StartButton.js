import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay ,faPause} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
function StartButton() {
    const [isActive , isPaused , intervalID] = useSelector((state)=>[
            state.isActive,
            state.isPaused,
            state.intervalID
        ]);
        const dispatch =useDispatch();
    const handleClick=()=>{
        console.log(isActive,isPaused);
        if(isActive===false){
            document.querySelector('.timer-screen').style.animationName="pendulum";
            dispatch({'type':'START_WATCH' })
            let interval = setInterval(()=>{
            dispatch({'type':'INCREASE_TIME'})
            },10);
            console.log(interval);
            dispatch({'type':'SET_INTERVAL',id:interval});
        }
        else if(isActive&&isPaused){
            document.querySelector('.timer-screen').style.animationName="pendulum";
            dispatch({'type':'RESUME_WATCH'})
            let interval = setInterval(()=>{
                dispatch({'type':'INCREASE_TIME'})
            },10);
            dispatch({'type':'SET_INTERVAL',id:interval});
        }
        else if(isActive&&!isPaused){
            document.querySelector('.timer-screen').removeAttribute('style');
            console.log(intervalID);
            clearInterval(intervalID);
            dispatch({'type':'PAUSE_WATCH'})
        }
    }
    return (
        <div className="Icon" onClick={handleClick}>
            {(!isActive || isPaused)?<FontAwesomeIcon icon={faPlay} />: <FontAwesomeIcon icon={faPause}/>}
            
        </div>
    )
}
export default StartButton;
