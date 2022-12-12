import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'1px dotted blue', margin:'10px'}}>
            <h2>This is Dial</h2>
            <p>Dial num is:{props.step} </p>
        </div>
    );
};

export default Dial;