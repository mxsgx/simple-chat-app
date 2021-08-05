import React, { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { IconSend } from '@tabler/icons';

function ChatBoxInput({ onSend }) {
  const submitButton = useRef(null);
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

  const onKeyPress = function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitButton.current.click();
    }
  };

  return (
    <form onSubmit={onSubmit} className={'flex flex-row space-x-4 mt-4'}>
      <TextareaAutosize
        placeholder="Type a message"
        value={text}
        onKeyPress={onKeyPress}
        onChange={onChange}
        className={
          'h-4 border-2 resize-none border-gray-300 rounded py-1 px-2 w-full self-center'
        }
      />
      <button
        type="submit"
        ref={submitButton}
        className={'rounded-full p-3 bg-blue-500 text-white self-end'}
      >
        <IconSend size={20} stroke={2} color={'white'} />
      </button>
    </form>
  );
}

export default ChatBoxInput;
