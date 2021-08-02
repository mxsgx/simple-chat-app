import React, { useState, useContext, useEffect } from 'react';
import ChatBoxContent from './ChatBoxContent';
import ChatBoxInput from './ChatBoxInput';
import SocketIOContext from '../providers/SocketIO';

function ChatBoxContainer() {
  const socket = useContext(SocketIOContext);
  const [messages, updateMessages] = useState([]);

  const onSend = function (data) {
    data = {
      ...data,
      id: socket.id,
    };

    socket.emit('chat:message', data);
  };

  useEffect(() => {
    socket.on('chat:receive', function (data) {
      updateMessages((oldMessages) => [...oldMessages, data]);
    });
  }, [socket]);

  return (
    <div
      style={{
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: 'black',
        width: '420px',
        padding: '.5rem',
        margin: '0 auto',
      }}
    >
      <ChatBoxContent messages={messages} />
      <ChatBoxInput onSend={onSend} />
    </div>
  );
}

export default ChatBoxContainer;
