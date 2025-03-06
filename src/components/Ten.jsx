import {useState} from "react"
export default function Picture() {
  const [bool,setbool] = useState(true)
  return (
    <div className={`background ${bool ? `background--active`: ``}`} onClick={e => setbool(!bool)}>
      <img
        className={`picture ${!bool ? `picture--active`: ``}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={e => setbool(!bool)}
      />
    </div>
  );
}
