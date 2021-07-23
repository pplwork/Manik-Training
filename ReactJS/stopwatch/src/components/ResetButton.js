import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRedo} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { connect } from 'react-redux'
function ResetButton(props) {
    const handleClick=()=>{
        if(props.isPaused){
            props.handleReset();
        }
    }
    return (
        <div className="Icon"  onClick={handleClick}>
            <FontAwesomeIcon icon={faRedo}/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        isPaused: state.isPaused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleReset : ()=>{dispatch({'type':'RESET_WATCH'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResetButton);