import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  AUMENTA_QTY,
  COSTO_TOTALE,
  DATA_FETCHING_FAIL,
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DELETE_ITEM,
  DIMINUISCI_QTY,
  EMPTY_CART,
  CONTATORE,
} from "./actions";
import products from "../products";

const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //utilizzo usereducer con state iniziale
  const [state, dispatch] = useReducer(reducer, initialState);
  //cancella un singolo elemento
  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  };
  //svuota il carrello
  const deleteAll = () => {
    dispatch({ type: EMPTY_CART });
  };
  //svuota il carrello
  const addQty = (_id) => {
    dispatch({ type: AUMENTA_QTY, payload: _id });
  };
  const reduceQty = (_id) => {
    dispatch({ type: DIMINUISCI_QTY, payload: _id });
  };

  //data fetching
  useEffect(() => {
    //IIFE Immediately Invoked Function Expression (funzioni chiamate nell'immediato dopo essere state definite)
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data.data });
      } catch (err) {
        dispatch({ type: DATA_FETCHING_FAIL });
      }
    })();
  }, []);
  //aggiorna costo totale e numero elementi nel carrello

  useEffect(() => {
    dispatch({ type: COSTO_TOTALE });
    dispatch({ type: CONTATORE });
  }, [state.products]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteItem,
        deleteAll,
        addQty,
        reduceQty,
      }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
