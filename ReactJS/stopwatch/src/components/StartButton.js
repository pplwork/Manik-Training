import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay ,faPause} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
function StartButton(props) {
    const handleClick=()=>{
        let {isActive,isPaused} = props;
        if(isActive===false){
            document.querySelector('.timer-screen').style.animationName="pendulum";
            props.StartWatch();
            props.SetIntervalId(setInterval(()=>{
                    props.IncreaseTime();
            },10))
        }
        else if(isActive&&isPaused){
            document.querySelector('.timer-screen').style.animationName="pendulum";
            props.ResumeWatch();
            props.SetIntervalId(setInterval(()=>{
                props.IncreaseTime();
            },10))
        }
        else if(isActive&&!isPaused){
            document.querySelector('.timer-screen').removeAttribute('style');
            clearInterval(props.intervalID);
            props.PauseWatch();
        }
    }
    return (
        <div className="Icon" onClick={handleClick}>
            {(!props.isActive || props.isPaused)?<FontAwesomeIcon icon={faPlay} />: <FontAwesomeIcon icon={faPause}/>}
            
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        isActive: state.isActive,
        isPaused: state.isPaused,
        intervalID: state.intervalID
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        StartWatch: ()=>{dispatch({'type':'START_WATCH' })},
        SetIntervalId: (id)=>{dispatch({'type':'SET_INTERVAL',id})},
        IncreaseTime: ()=>{dispatch({'type':'INCREASE_TIME'})},
        ResumeWatch: ()=>{dispatch({'type':'RESUME_WATCH'})},
        PauseWatch:()=>{dispatch({'type':'PAUSE_WATCH'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StartButton)
