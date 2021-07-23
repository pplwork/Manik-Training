import React from 'react'
import { connect } from 'react-redux';

function StopWatchTimer(props) {
    let hours= Math.floor(props.time/(60*60*1000));
    let minutes = Math.floor((props.time - hours*(60*60*1000))/(60*1000));
    let seconds = Math.floor((props.time - hours*60*60*1000-minutes*60*1000)/1000);
    let milliSeconds = Math.floor((props.time - hours*60*60*1000-minutes*60*1000-seconds*1000)/10);
    return (
        <div className="timer-screen">
            <div>{(hours >=10)? hours : `0${hours}`}:</div>
            <div>{(minutes >=10)? minutes : `0${minutes}`}:</div>
            <div>{(seconds >=10)? seconds : `0${seconds}`}:</div>
            <div>{(milliSeconds >=10)? milliSeconds : `0${milliSeconds}`}</div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        time: state.time
    }
}
export default connect(mapStateToProps)(StopWatchTimer)
