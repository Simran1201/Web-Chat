import { JOIN_THE_GROUP } from "../actions/actionTypes";

const initialState = {
    user:"",
    department:"",
    isLogged: false,
}

const joinReducer = ( state=initialState, action )=>{
    if(action.type === JOIN_THE_GROUP){
        return{
            ...state,
            isLogged: true,
            user: action.user,
            department: action.department
        }
    }
    else{
        return state
    }
}

export default joinReducer