import React, { useEffect, useState } from 'react';
import Device from '../../Device/Device';
import Display from '../Display/Display';

const Watch = () => {
    const [steps,setSteps] =useState(0);
    const increaseSteps=()=>{
        const newSteps= steps+1;
        setSteps(newSteps);
    }

    useEffect(()=>{
        console.log(steps);
    },[steps])
    return (
        <div style={{border:'2px solid red',margin:'30px'}}>
            <h2>Initial State: {steps}</h2>
            <button onClick={increaseSteps}>Steps Count: {steps}</button>
            <Device count={steps}></Device>

            <Display step={steps}></Display>

        </div>
    );
};

export default Watch;