import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducer from "./reducers";

// Storing values of reducer created and applied middle ware with dev tools to debug and asncy functions
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));