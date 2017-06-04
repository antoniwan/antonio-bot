import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

function Message (props) {
  const sentBy = props.user ? 'message user' : 'message';
  return (
    <div>
      <div className={sentBy}>
        {props.text}
      </div>
    </div>
  )
}
Message.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

export default Message;
