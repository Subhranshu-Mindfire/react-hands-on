import { useState, useRef } from 'react';

export default function Eighteen() {
  const [index, setIndex] = useState(0);
  const image = useRef(null) 
  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            setIndex(index + 1);
            image.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'cenater'
            });
          } else {
            setIndex(0);
          }
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={image}>
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                ref={
                  index === i ?
                    image : null
                    
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
  });
}

