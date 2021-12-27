// import ComponentC from './component/ComponentC';
import React from 'react';
import './App.css';
import ClassTimer from './useRef/ClassTimer';
import FocusInput from './useRef/FocusInput';

// export const UserContext = React.createContext()
// export const LanguageContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ClassTimer />
      {/* <FocusInput /> */}
      {/* <UserContext.Provider value={'Jayaprakash'}>
        <LanguageContext.Provider value={'Javascript'}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
