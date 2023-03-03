import React from 'react';
import CompC from './CompC';
import { UserContextProvider } from './UserContext';

const CompB = (props) => {
    const {info} = props
    return (
        <div>
            <>
            Comp B will be here
            <UserContextProvider>
                <CompC info = {info}/>
            </UserContextProvider>
            </>
        </div>
    );
};

export default CompB;