import React from 'react';
import CompA from './CompA';
import { GlobalContextProvider } from './GlobalContext';

import './App.css'
//import { UserContextProvider } from './UserContext';

const info = 'Info will be here'
const App = (props) => {
  return (
    <GlobalContextProvider>
      {/* <UserContextProvider> */}
    <div className='App'>
      <CompA info = {info}/>
    </div>
    {/* </UserContextProvider> */}
    </GlobalContextProvider>
  );
}
    
export default App;