import React, { Component } from 'react'
import StopWatchTimer from './StopWatchTimer'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'
import LapButton from './LapButton'
import Laps from './Laps'
export default class Stopwatch extends Component {
    state={
        isActive: false,
        isPaused: true,
        time: 0,
        Laps:[],
    }
    handleStart= async()=>{
        let {isActive,isPaused} = this.state;
        if(isActive ===false){
            document.querySelector('.timer-screen').style.animationName = "pendulum";
            this.setState({
                isActive: true,
                isPaused: false,
                time:0
            })
            
            this.interval = setInterval(()=>{
                if(this.state.isPaused===false){
                this.setState({
                    time: this.state.time+10,
                });
        }
        },10);
        }
        else if(isActive===true && isPaused ===true){
            document.querySelector('.timer-screen').style.animationName = "pendulum";
            this.setState({
                isPaused:false
            })
        }
        else if(isActive===true && isPaused===false){
            document.querySelector('.timer-screen').removeAttribute('style');
            this.setState({
                isPaused:true
            })
        }
    }
    handleReset = async ()=>{
        const {isPaused}=this.state;
        console.log(isPaused)
        if(isPaused===true){
            clearInterval(this.interval);
            this.setState({
                isActive:false,
                isPaused: false,
                time:0,
                Laps: []
            });
        }
    }
    handleStop = ()=>{
        if(this.state.isActive===true){
        // document.querySelector('.timer-screen').removeAttribute('style');
        clearInterval(this.interval);
        this.setState({
            isActive: false,
            isPaused:true
        })
        }
    }
    handleLap = ()=>{
        const {isActive,isPaused,time}=this.state;
        if(isActive===true && isPaused===false){
            this.setState((prev)=>{
                return {
                    ...prev,
                    Laps:[...prev.Laps,{
                        lapNo: prev.Laps.length,
                        lapTime: time,
                        splitTime: prev.Laps.length ?  time-prev.Laps[prev.Laps.length-1].lapTime : time
                    }]
                }
            })
        }
    }
    render() {
        return (
            <>
            <div className="main-container">
                <div className="stopwatch">
                <StopWatchTimer time={this.state.time}/>
                <div className="icon-wrapper">
                    <StartButton handleStart={this.handleStart} state={this.state}/>
                    <StopButton handleStop={this.handleStop}/>
                    <ResetButton handleReset={this.handleReset}/>
                    <LapButton handleLap={this.handleLap}/>
                </div>
            </div>
            </div>
            <div className="lap-main-container">
            <div>{(this.state.Laps.length) ?this.state.Laps.map(lap=>{
                    return <Laps lap={lap} key={lap.lapNo}/>
                }): null}</div>
                </div>
        </>
        )
    }
}
