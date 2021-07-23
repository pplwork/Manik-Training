import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
function LapButton(props) {
    const handleClick=()=>{
        if(props.isActive&&!props.isPaused){
            props.handleLap();
        }
    }
    return (
        <div className="Icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faStopwatch} />
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        isPaused : state.isPaused,
        isActive: state.isActive
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleLap : ()=>{dispatch({'type':'LAPS'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LapButton)