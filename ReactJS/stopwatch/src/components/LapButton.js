import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons'
export default function LapButton(props) {
    return (
        <div className="Icon" onClick={props.handleLap}>
            <FontAwesomeIcon icon={faStopwatch} />
        </div>
    )
}
