import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = (props) => {
  const { messages } = props;
  return (
    <div>
      {messages.map(message =>
        <Message {...message} />
      )}
    </div>
  );
}
MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
