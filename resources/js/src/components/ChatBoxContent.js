import React, { useContext, useEffect, useRef, useState } from 'react';
import SocketIOContext from '../providers/SocketIO';
import ChatBoxMessage from './ChatBoxMessage';

function ChatBoxContent({ messages }) {
  const [lastScrollTopMax, setLastScrollTopMax] = useState(0);
  const container = useRef(null);
  const socket = useContext(SocketIOContext);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];

      if (
        (lastMessage && lastMessage.id === socket.id) ||
        container.current.scrollTop === lastScrollTopMax
      ) {
        container.current.scrollTo(0, container.current.scrollTopMax);
      }
    }

    setLastScrollTopMax(container.current.scrollTopMax);
  }, [messages]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '.5rem 1rem',
        border: '2px dashed black',
        marginBottom: '-2px',
      }}
    >
      <div
        style={{
          maxHeight: '420px',
          overflowY: 'auto',
        }}
        ref={container}
      >
        {messages.length ? (
          messages.map((message, index) => (
            <ChatBoxMessage data={message} key={index} />
          ))
        ) : (
          <ChatBoxMessage
            data={{
              id: 'Mod',
              name: 'Moderator',
              text: 'Hello!',
              timestamp: new Date().toISOString(),
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ChatBoxContent;
