import { JOIN_THE_GROUP, SEND_MESSAGE } from "./actionTypes"

export const join = (name = "", dept = "") => {
    return {
        type: JOIN_THE_GROUP,
        user: name, //The name of the user
        department: dept //The Grp slect by user
    }
}
export const send = (sMsg = "") => {
    return {
        type: SEND_MESSAGE,
        sendMsg: sMsg //The message written by user
    }
}