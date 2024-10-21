import * as React from 'react';
import { useLocalStorage } from './useLocalStorage';

const globalContext = React.createContext();

function GlobalContextProvider(props) {
  const [loginStatus, setLoginStatus] = useLocalStorage('loginStatus', '');

  return (
    <globalContext.Provider value={{
        loginStatus,
        setLoginStatus
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
