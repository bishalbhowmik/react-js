import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'2px solid black',margin:'20px'}}>
            <h2>Watch Steps:{props.step} </h2>
            <Dial step={props.step}></Dial>
        </div>
    );
};

export default Display;<h2>Watch Name: </h2>