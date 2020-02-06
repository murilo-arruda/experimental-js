import React, { createRef, useState } from 'react';
import './Form.css';
import Button from 'components/Button';

const Form = () => {
  const userRef = createRef();
  const passwordRef = createRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const animatePlaceholder = ref => {
    ref.current.className = 'placeholder animate';
  };
  const removeAnimate = (e, ref) => {
    if (e.target.value.length === 0) ref.current.className = 'placeholder';
    else ref.current.className = 'placeholder animate blur';
  };
  const handleForm = e => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <form>
      <h2>Login</h2>
      <div className='special-input'>
        <input
          type='text'
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          onFocus={e => animatePlaceholder(userRef)}
          onBlur={e => removeAnimate(e, userRef)}
        />
        <div className='placeholder' ref={userRef}>
          username
        </div>
      </div>
      <div className='special-input'>
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          onFocus={e => animatePlaceholder(passwordRef)}
          onBlur={e => removeAnimate(e, passwordRef)}
        />
        <div className='placeholder' ref={passwordRef}>
          password
        </div>
      </div>
      <Button onClick={handleForm}>Hello</Button>
    </form>
  );
};

export default Form;
