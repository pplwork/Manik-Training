import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRedo} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
export default function ResetButton(props) {
    return (
        <div className="Icon"  onClick={props.handleReset}>
            <FontAwesomeIcon icon={faRedo}/>
        </div>
    )
}
