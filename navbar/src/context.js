import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='ciao'>
      {children}{" "}
      {/*// è tutto ciò che si trova all'interno del tag di un componente, in questo caso è App*/}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
