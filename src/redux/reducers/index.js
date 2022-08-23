import { combineReducers } from "redux";
import joinReducer from "./joinReducer";
import sendMsg from "./sendMsg";

// Combing Different reducer  
const reducer = combineReducers({
    join: joinReducer,
    send: sendMsg
});

export default reducer