import React, { Component} from 'react'
import StopWatchTimer from './StopWatchTimer'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'
import LapButton from './LapButton'
import Laps from './Laps'
import { connect } from 'react-redux'
class Stopwatch extends Component {
    render() {
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
            <div>{(this.props.Laps.length) ?this.props.Laps.map(lap=>{
                    return <Laps lap={lap} key={lap.lapNo}/>
                }): null}</div>
                </div>
        </>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        Laps: state.Laps
    }
}
export default connect(mapStateToProps)(Stopwatch);
