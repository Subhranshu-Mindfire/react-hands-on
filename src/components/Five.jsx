// 4

import { useState } from 'react';

export default function Five() {
  const [name, setName] = useState('');

  function handleClick() {
    let name = prompt('What is your name?')
    setName(name);
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
