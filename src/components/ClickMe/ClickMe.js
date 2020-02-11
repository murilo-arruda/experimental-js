import React, { useState } from 'react';
import './ClickMe.css';

const ClickMe = () => {
  const [text, setText] = useState('Hello');
  const changeText = () => {
    setText('Hello World');
  }
  return <button onClick={changeText}>{text}</button>;
};

export default ClickMe;
