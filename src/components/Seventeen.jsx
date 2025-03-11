import {useRef} from "react"
export default function Seventeen() {
  const search = useRef()
  return (
    <>
      <nav>
        <button onClick={()=>search.current.focus()}>Search</button>
      </nav>
      <input ref={search}
        placeholder="Looking for something?"
      />
    </>
  );
}
