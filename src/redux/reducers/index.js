import { combineReducers } from "redux";
import joinReducer from "./joinReducer";
import sendMsg from "./sendMsg";

const reducer = combineReducers({
    join: joinReducer,
    send: sendMsg
});

export default reducer