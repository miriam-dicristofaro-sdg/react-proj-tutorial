import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        isModalOpen,
        closeModal,
        openModal,
      }}>
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
