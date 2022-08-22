import { SEND_MESSAGE } from "../actions/actionTypes";
const initialState ={
    sendMsg:""
}

const sendMsg = ( state=initialState, action )=>{
    if(action.type === SEND_MESSAGE){
        return{
            ...state,
            sendMsg: action.sendMsg
        }
    }
    else{
        return state
    }
}

export default sendMsg