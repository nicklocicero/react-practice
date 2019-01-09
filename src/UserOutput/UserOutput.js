import React from 'react';

const userOutput = (props) => {
    return (
        <div style={props.style} className="UserOutput">
            <p>{props.username}</p>
            <p></p>
        </div>
    )
}

export default userOutput;