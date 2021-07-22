import React from 'react'

export default function Laps(props) {
    const time=(time)=>{
        let hours= Math.floor(time/(60*60*1000));
        let minutes = Math.floor((time - hours*(60*60*1000))/(60*1000));
        let seconds = Math.floor((time - hours*60*60*1000-minutes*60*1000)/1000);
        let milliSeconds = Math.floor((time - hours*60*60*1000-minutes*60*1000-seconds*1000)/10);
        if(hours<=10) hours = `0${hours}`
        if(minutes<=10) minutes = `0${minutes}`
        if(seconds<=10) seconds = `0${seconds}`
        if(milliSeconds<=10) milliSeconds = `0${milliSeconds}`
        return `${hours}:${minutes}:${seconds}:${milliSeconds}`
    }
    return (
        <div className="lap-container">
            <div className="lapno">Lap {props.lap.lapNo}</div>
            <div className="lapSplitTime flex"><div>Split Time</div><div>{time(props.lap.splitTime)}</div></div>
            <div className="lapTime flex"><div>Lap Time </div><div>{time(props.lap.lapTime)}</div></div>
        </div>
    )
}
