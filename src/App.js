// import ComponentC from './component/ComponentC';
import React from 'react';
import './App.css';
import CounterOne from './reducer/CounterOne';

// export const UserContext = React.createContext()
// export const LanguageContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CounterOne />
      {/* <UserContext.Provider value={'Jayaprakash'}>
        <LanguageContext.Provider value={'Javascript'}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
