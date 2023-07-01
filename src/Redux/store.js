import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //linea para poder conectar redux con el navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) 
    //middleware nos ayuda a comunicarnos con el servidor, es nuestro traductor
);


export default store;