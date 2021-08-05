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
      className={'bg-gray-50 p-4 rounded-lg shadow-md max-w-lg outline-none w-full mx-auto my-4'}
    >
      <ChatBoxContent messages={messages} />
      <ChatBoxInput onSend={onSend} />
    </div>
  );
}

export default ChatBoxContainer;
