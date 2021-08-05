import React, { useContext } from 'react';
import SocketIOContext from '../providers/SocketIO';

function ChatBoxMessage({ data }) {
  const socket = useContext(SocketIOContext);

  return (
    <div
      className={[
        'flex',
        data.id === socket.id ? 'flex-row-reverse' : 'flex-row',
      ].join(' ')}
    >
      <div
        className={[
          data.id === socket.id ? 'bg-blue-500' : 'bg-gray-300',
          data.id === socket.id ? 'text-white' : 'text-black',
          'p-4',
          'rounded-lg',
        ].join(' ')}
      >
        <b className={'block'}>{data.name}</b>
        <div className={'whitespace-pre-line'}>{data.text}</div>
      </div>
    </div>
  );
}

export default ChatBoxMessage;
