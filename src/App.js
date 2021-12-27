// import ComponentC from './component/ComponentC';
import React from 'react';
import './App.css';
import FocusInput from './useRef/FocusInput';

// export const UserContext = React.createContext()
// export const LanguageContext = React.createContext()

function App() {
  return (
    <div className="App">
      <FocusInput />
      {/* <UserContext.Provider value={'Jayaprakash'}>
        <LanguageContext.Provider value={'Javascript'}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
