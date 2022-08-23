import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { send } from '../redux';
import { w3cwebsocket as WS3 } from "websocket";
import styles from "./css/chat.module.css";

// Connecting to local host 8000
const client = new WS3( "ws://localhost:8000" );

function SendMsg() {
    // Name of the user 
    const user = useSelector( ( state ) => state.join.user );

    // Geting seleted grp by user
    const dep = useSelector( ( state ) => state.join.department );

    // Message enter by user
    const [ msg, setMsg ] = useState( "" );

    // When user write something
    const handleChange = ( e ) => {
        setMsg( e.target.value );
    }
    // Dispatching action when user click on send button
    const dispatch = useDispatch( msg );

    // When user click on send button
    const handleSend = () => {
        // If no message written
        if( msg === "" ) {
            alert( "Please enter some message" );
        }
        // If something writen
        else {
            // Sending message to server
            client.send( JSON.stringify( {
                type:   "message",
                msg:    msg,
                user:   user,
                unique: Math.floor( ( Math.random() * 10000 ) + 1 ), //Unique value for key
                dep:    dep
            } ) );
            // Dispatching the msg written by user
            dispatch( send( msg ) );
            setMsg( "" );
        }
    }

    return (
        <div className = { `${ styles.newMessage }` }>

            {/* Send Button */}
            <button onClick = { handleSend } className = { `${ styles.btn }` } > send message </button>

            {/* Message Input Field */}
            <input type = "text" placeholder = 'Enter Message: ' onChange = { handleChange } value = { msg } />
        </div>
    )
}

export default SendMsg
