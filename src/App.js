import React from 'react';
import Button from 'components/Button';
import './App.css';

function App() {
  const handleClick = e => {
    // if (e.target.className != 'App') e.target.className = 'fade-and-fall';
  };

  return (
    <div className='App' onClick={handleClick}>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        necessitatibus autem veritatis quas quis, tempora ratione, commodi iure
        quidem optio porro velit atque fugiat sint deleniti nesciunt tempore,
        voluptatibus fuga.
      </p>
      <Button text='Decline' className='white bg-danger' />
      <Button text='Accept' className='white bg-success' />
      <Button text='Help' className='white bg-blue' />
    </div>
  );
}

export default App;
