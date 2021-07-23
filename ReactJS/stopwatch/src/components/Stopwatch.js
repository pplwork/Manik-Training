import React from 'react'
import StopWatchTimer from './StopWatchTimer'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'
import LapButton from './LapButton'
import Laps from './Laps'
import {useSelector} from 'react-redux'
function Stopwatch() {
    const laps = useSelector((state)=>state.Laps);
        return (
            <>
            <div className="main-container">
                <div className="stopwatch">
                <StopWatchTimer/>
                <div className="icon-wrapper">
                    <StartButton />
                    <StopButton/>
                    <ResetButton/>
                    <LapButton/>
                </div>
            </div>
            </div>
            <div className="lap-main-container">
            <div>{(laps) ?laps.map(lap=>{
                    return <Laps lap={lap} key={lap.lapNo}/>
                }): null}</div>
                </div>
        </>
        )
}
export default Stopwatch;
