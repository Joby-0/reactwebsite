import { createContext, useContext, useState } from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const openSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const closeAll = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <UIContext.Provider
      value={{
        showSignIn,
        showSignUp,
        openSignIn,
        openSignUp,
        closeAll,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
