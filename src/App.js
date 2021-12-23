import React from 'react';
import './App.css';
import ComponentC from './component/ComponentC';

export const UserContext = React.createContext()
export const LanguageContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Jayaprakash'}>
        <LanguageContext.Provider value={'Javascript'}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
