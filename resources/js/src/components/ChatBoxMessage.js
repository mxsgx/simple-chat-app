import React from 'react';

function ChatBoxMessage({ data }) {
  return (
    <div style={{ margin: '.5rem 0', fontFamily: 'sans-serif' }}>
      <div>
        <b>
          {data.name} (ID: {data.id})
        </b>
      </div>
      <div>{data.text}</div>
      <div>
        <i>at {new Date(data.timestamp).toLocaleTimeString()}</i>
      </div>
    </div>
  );
}

export default ChatBoxMessage;
