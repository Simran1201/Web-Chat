import React from 'react'
import { useSelector } from 'react-redux'
import Join from './Join'
import Chat from './Chat'

function Main() {
    // value to switch between joining and chatting
    const log = useSelector((state) => state.join.isLogged)
    return (
        <div>
            {/* If user Is logged he/she will go to chat paage else first join */}
            {log ? <Chat /> : <Join />}
        </div>
    )
}

export default Main
