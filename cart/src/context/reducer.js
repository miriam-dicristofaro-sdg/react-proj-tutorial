import {
  DATA_FETCHING_FAIL,
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DELETE_ITEM,
  EMPTY_CART,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  COSTO_TOTALE,
  CONTATORE,
} from "./actions";

const reducer = (state, { type, payload }) => {
  if (type === DATA_FETCHING_STARTED) {
    return { ...state, isLoading: true };
  }
  if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: payload.map((el) => {
        return { ...el, qty: 1 };
      }),
    };
  }
  if (type === DATA_FETCHING_FAIL) {
    return { ...state, isLoading: false, isError: true };
  }
  if (type === EMPTY_CART) {
    return { ...state, products: [] };
  }
  if (type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== payload),
    };
  }
  if (type === AUMENTA_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (payload === el._id) {
          return { ...el, qty: el.qty + 1 };
        } else {
          return { ...el };
        }
      }),
    };
  }
  if (type === DIMINUISCI_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (payload === el._id && el.qty > 0) {
          return { ...el, qty: el.qty - 1 };
        } else if (payload === el._id && el.qty === 0) {
          return { ...el };
        } else {
          return { ...el };
        }
      }),
    };
  }
  if (type === COSTO_TOTALE) {
    return {
      ...state,
      //reduce accetta almeno una callback function e eventualmente, un secondo parametro.
      // La nostra callback può accettare fino a 4 parametri, il primo, 'total', è l'accumulatore, rappresenta il valore precedente a quello attuale, iterato all'inizio, e dal quale partirà la successiva iterazione.
      //Dopo la prima iterazione viene ritornato total + qty * item.price come total, e come item, il secondo
      total: state.products.reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0),
    };
  }
  if (type === CONTATORE) {
    return {
      ...state,
      itemCounter: state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }
  return state;
};

export default reducer;
