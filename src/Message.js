import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const { text } = message;
  return <div className="Message">{text}</div>;
};

export default Message;
