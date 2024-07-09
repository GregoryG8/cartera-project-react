import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const onOpen = (message, type = 'success') => {
    setState({ isOpen: true, type, message });
  };

  const onClose = () => {
    setState({ ...state, isOpen: false });
  };

  return (
    <AlertContext.Provider value={{ ...state, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
