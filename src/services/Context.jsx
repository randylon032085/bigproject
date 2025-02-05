import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getAccounts } from "./accounts/Accounts";

const loginContext = createContext();
const initialState = {
  accounts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setAccounts":
      return { ...state, accounts: action.payload };
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchingData() {
      const data = await getAccounts();
      dispatch({ type: "setAccounts", payload: data });
    }

    fetchingData();
  }, []);

  return (
    <loginContext.Provider value={{ accounts: state.accounts }}>
      {children}
    </loginContext.Provider>
  );
}

function useLoginContext() {
  const context = useContext(loginContext);
  if (context === undefined) {
    throw new Error("Provider not found");
  }
  return context;
}

export { ContextProvider, useLoginContext };
