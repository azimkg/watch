import React, { useReducer } from "react";
import axios from "axios";
import { CASE_SET_PRODUCTS } from "../components/Helpers/Cases";
import { PRODUCTS_API } from "../components/Helpers/consts";

export const productContext = React.createContext();

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_SET_PRODUCTS:
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    let data = await axios(PRODUCTS_API);
    dispatch({
      type: CASE_SET_PRODUCTS,
      payload: data,
    });
  }

  return (
    <productContext.Provider value={{ products: state.products, getProducts }}>
      {children}
    </productContext.Provider>
  );
};
export default ProductsContextProvider;
