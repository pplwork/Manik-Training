import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay ,faPause} from '@fortawesome/free-solid-svg-icons';

export default function StartButton(props) {
    return (
        <div className="Icon" onClick={props.handleStart}>
            {(!props.state.isActive || props.state.isPaused)?<FontAwesomeIcon icon={faPlay} />: <FontAwesomeIcon icon={faPause}/>}
            
        </div>
    )
}
