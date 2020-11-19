import React, { useState } from 'react'
import './Chat.css'

import {
  Avatar,
  IconButton
} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from './../axios'

function Chat({ messages }) {

  const [input, setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault()

    await axios.post('/api/v1/messages/new', {
      message: input,
      name: "champ",
      timestamp: "Just now!...",
      received: true
    })

    setInput('')
  }
  return (
    <div className="chat">

      <div className="chat__header">
        <Avatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        <div className="chat__header_info">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__header_right">
          <IconButton >
            <DonutLargeIcon />
          </IconButton>
          <IconButton >
            <ChatIcon />
          </IconButton>
          <IconButton >
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {
          messages.map((message, index) => (
            <p key={index} className={`chat__massage ${message.received  && 'chat__reciever'}`}>
              <span className="chat__name">{message.name}</span>
                {message.message}
              <span className="chat__timestamp">
                {message.timestamp}
              </span>
            </p>
          ))
        }
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Type a massage" 
            type="text"
          />
          <button onClick={sendMessage} type="submit" >
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>

    </div>
  )
}

export default Chat
