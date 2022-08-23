import { JOIN_THE_GROUP } from "../actions/actionTypes";
// Initial value of State
const initialState = {
    user:"",
    department:"",
    isLogged: false,
}
// When Join the grp method is run
const joinReducer = ( state=initialState, action )=>{
    // When value matches the condition
    if(action.type === JOIN_THE_GROUP){
        return{
            // The new state is created
            ...state,
            isLogged: true,
            user: action.user,
            department: action.department
        }
    }
    else{
        // If no matches return initial values
        return state
    }
}

export default joinReducer