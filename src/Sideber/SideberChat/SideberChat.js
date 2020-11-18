import React from 'react'
import './SideberChat.css'

import {
  Avatar
} from '@material-ui/core'

function SideberChat() {
  return (
    <div className="siedber__chat">
      <Avatar />
      <div className="siedber__chat_info">
        <h2>Room name</h2>
        <p>the is the last message</p>
      </div>
    </div>
  )
}

export default SideberChat
