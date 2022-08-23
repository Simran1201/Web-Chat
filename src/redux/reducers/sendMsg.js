import { SEND_MESSAGE } from "../actions/actionTypes";
// Initial value of State
const initialState = {
    sendMsg: ""
}
// When Sending message method is run
const sendMsg = (state = initialState, action) => {
    // When value matches the condition
    if (action.type === SEND_MESSAGE) {
        return {
            // The new state is created
            ...state,
            sendMsg: action.sendMsg
        }
    }
    else {
        // If no matches return initial values
        return state
    }
}

export default sendMsg