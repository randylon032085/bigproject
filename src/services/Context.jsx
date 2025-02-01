import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const loginContext = createContext();

function ContextProvider({ children }) {
  return <loginContext.Provider value={{}}>{children}</loginContext.Provider>;
}

function useLoginContext() {
  const context = useContext(loginContext);
  if (context === undefined) {
    throw new Error("Provider not found");
  }
  return context;
}

export { ContextProvider, useLoginContext };
