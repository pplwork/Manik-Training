import React from 'react'
import {faStop} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function StopButton(props) {
    return (
        <div className="Icon" onClick={props.handleStop}>
            <FontAwesomeIcon icon={faStop} />
        </div>
    )
}
