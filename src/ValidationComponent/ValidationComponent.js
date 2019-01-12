import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            {(props.text.length < 5) ? <p>text too short</p> : <p>text long enough</p>}
        </div>
    )
}

export default validationComponent;