import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { w3cwebsocket as WS3 } from "websocket";
import styles from "./css/chat.module.css";

// Connecting to local host 8000
const client = new WS3("ws://localhost:8000");

function GetMsg() {

  // Initial values of message and user
  const [getMsgs, setGetMsgs] = useState({
    user: "",
    msg: "",
    arr: []
  });

  // Getting seleted grp by user
  const dep = useSelector((state) => state.join.department);

  // Getting messages from server
  useEffect(() => {
    // Establishing the connection between client and server
    client.onopen = () => {
      console.log("Web Socket client connected");
    }
    // When submit button clicked the message will be send and here it recieves  
    client.onmessage = (msg) => {
      const dfs = JSON.parse(msg.data);
      // we get an object with what has been send
      console.log("My Data: ", dfs);

      // Checking the grp that matches
      if (dep === dfs.dep) {
        let array = getMsgs.arr;
        array.push({
          "msg": dfs.msg,
          "user": dfs.user,
          "unique": dfs.unique
        });
        // Setting the value that get from server
        setGetMsgs({
          arr: array
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className={`${styles.msg}`}>
      {/* Every time when message recieve or send we get there name and message in box */}
      <div className={`${styles.ans}`}>
        {
          getMsgs.arr.map((val) =>
            <div key={val.unique}>
              <h5>{val.user} : {val.msg}</h5>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default GetMsg