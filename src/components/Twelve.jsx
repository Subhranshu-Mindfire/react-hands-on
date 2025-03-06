import { useState } from 'react';

export default function Twelve() {
  const [text, setText] = useState('');
  function handleChange(e) {
    setText(e.target.value);
  }
  
  return (
    <>
      <Input label="First input" text={text} onchange={handleChange} />
      <Input label="Second input" text={text} onchange={handleChange}/>
    </>
  );
}

function Input({ label, text, onchange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onchange}
      />
    </label>
  );
}
