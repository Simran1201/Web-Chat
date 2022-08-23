import React from 'react'
import { connect } from 'react-redux'
import GetMsg from './GetMsg'
import SendMsg from './SendMsg'
import styles from "./css/chat.module.css";

// Getting the value and grp given by user
const mapStateToProps = ( state ) => {
    return {
        user:       state.join.user,
        department: state.join.department,
    }
}
function Chat( props ) {
    return (
        <div style = { { textAlign: "center" } } >
            { /* Welcome msg */ }
            <h1 className = { `${ styles.h1 }` } > Welcome { props.user } to the Chat Group </h1>

            { /* Msg Sending and receiving section */}
            <div className = { `${ styles.container }` } >

                { /* Sending Message Section  */}
                <div className = { `${ styles.sideComp }` }>
                    { /* The group from user belongs to */ }
                    <button className = { `${ styles.dep }` } > { props.department } Group </button>
                </div>

                { /* The message from server to client*/ }
                <div>
                    <GetMsg />
                </div>

                { /* The message from client to server */ }
                <div>
                    <SendMsg />
                </div>
            </div>
        </div>
    )
}

export default connect( mapStateToProps )( Chat )