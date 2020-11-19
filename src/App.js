import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import './App.css';

import Sideber from './Sideber/Sideber'
import Chat from './Chat/Chat'
import APIKey from './APIKey'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/message/sync').then((response) => {

      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher(APIKey, {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  },[messages])

  return (
    <div className="app">
      <div className="app__body">
        <Sideber />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
