import React from 'react'
import {faStop} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
function StopButton(props) {
    const handleClick=()=>{
        if(props.isActive===true){
            document.querySelector('.timer-screen').removeAttribute('style');
            clearInterval(props.intervalID);
            props.stopWatch();
        }
    }
    return (
        <div className="Icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faStop} />
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        isActive: state.isActive,
        intervalID: state.intervalID
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        stopWatch: ()=>{dispatch({'type':'STOP_WATCH'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StopButton);
