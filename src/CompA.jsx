import React from 'react';
import CompB from './CompB';

const CompA = (props) => {
    const {info} = props
    return (
        <div>
            <>
            <p>Comp A will be here</p>
            <p>{info}</p>
            <CompB info = {info}/>
            </>
        </div>
    );
};

export default CompA;