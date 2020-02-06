import React from 'react';
import './Button.css';

const Button = ({ text, children, className }) => {
  return <button className={className}>{text ? text : children}</button>;
};

export default Button;
