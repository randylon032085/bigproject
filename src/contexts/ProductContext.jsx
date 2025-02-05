import { createContext, useContext, useEffect, useReducer } from "react";
import { getProduct } from "../services/products/Product";

const initialState = {
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };
  }
}
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct();
      dispatch({ type: "setProducts", payload: data });
    }
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products: state.products }}>
      {children}
    </ProductContext.Provider>
  );
}

function UseProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("Provider not found");
  }

  return context;
}
export { ProductContextProvider, UseProductContext };
