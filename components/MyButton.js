import React from 'react';

const MyButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button type="button" onClick={handleClick}>Click Me</button>;
};

export default MyButton;
