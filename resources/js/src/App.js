import React from 'react';
import ReactDOM from 'react-dom';
import { io } from 'socket.io-client';
import ChatBoxContainer from './components/ChatBoxContainer';
import SocketIOContext from './providers/SocketIO';

function App() {
  return (
    <SocketIOContext.Provider value={io()}>
      <ChatBoxContainer />
    </SocketIOContext.Provider>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
