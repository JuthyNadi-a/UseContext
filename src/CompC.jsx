import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { UserContext } from './UserContext';

const CompC = (props) => {
   const {info} = props
    const framework = useContext(GlobalContext)
    const userInfo = useContext(UserContext)

    return (
        <div>
            <p>Comp C will be here</p>
            {/* through props passing each ccomp */}
            <p>{info}</p>
            {/* Through provider */}
            <p>{framework}</p>
            <p> Username: {userInfo.name}</p>
            <p> Info: {userInfo.job}</p>
        </div>
    );
};

export default CompC;