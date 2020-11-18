import React from 'react'
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

function Chat() {

  const sendMessage = () => {

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
        <p className="chat__massage">
          <span className="chat__name">Champ</span>
          This is a massage
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chat__reciever chat__massage">
          <span className="chat__name">Champ</span>
          This is a massage
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chat__massage">
          <span className="chat__name">Champ</span>
          This is a massage
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a massage" type="text" />
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
