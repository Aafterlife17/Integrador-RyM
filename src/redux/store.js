//? HOMEWORK REACT REDUX

//ESTE ES EL COPYPASTE QUE EL PROFE DIJO QUE SIEMPRE TIENE GUARDADO / NO PREGUNTAR QUE ES AHRE

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;