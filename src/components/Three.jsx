// 2

import { useState } from "react"
export default function Three() {

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")

  function handleReset() {
    setfirstName("")
    setlastName("")
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e)=>{
          setfirstName(e.target.value)
        }}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e)=>{
          setlastName(e.target.value)
        }}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
