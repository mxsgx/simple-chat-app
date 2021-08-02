import React, { useState } from 'react';

function ChatBoxInput({ onSend }) {
  const [text, setText] = useState('');

  const onSubmit = function (event) {
    event.preventDefault();

    if (!text || text.length < 1) {
      return;
    }

    onSend({
      text,
      name: 'Anonymous',
      timestamp: new Date().toISOString(),
    });

    setText('');
  };

  const onChange = function (event) {
    setText(event.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        borderTopWidth: '2px',
        borderTopStyle: 'dashed',
        borderTopColor: 'black',
        paddingTop: '.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={onChange}
        style={{
          width: '80%',
          padding: '.25rem',
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatBoxInput;
