import React from 'react'
import './Sideber.css'

import SideberChat from './SideberChat/SideberChat'

import {
  Avatar, 
  IconButton
} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sideber() {
  return (
    <div className="sideber">

      <div className="sideber__header">
        <Avatar src="https://avatars0.githubusercontent.com/u/25764405?s=460&u=1e4c706d9d8881363f44eba7d75b9f469c73bc56&v=4" />
        <div className="sideber__header_right">
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

      <div className="sideber__search">
        <div className="sideber__search_container">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sideber__chats">
        <SideberChat />
        <SideberChat />
        <SideberChat />
      </div>

    </div>
  )
}

export default Sideber
