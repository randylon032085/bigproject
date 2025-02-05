import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getAccounts } from "../services/accounts/Accounts";
import { getProduct } from "../services/products/Product";

const loginContext = createContext();
const initialState = {
  accounts: [],
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setAccounts":
      return { ...state, accounts: action.payload };
    case "setProducts":
      return { ...state, products: action.payload };
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

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct();
      dispatch({ type: "setProducts", payload: data });
    }
    fetchProduct();
  }, []);

  return (
    <loginContext.Provider
      value={{ accounts: state.accounts, products: state.products }}
    >
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
