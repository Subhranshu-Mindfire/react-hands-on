// state-a-components-memory

// 1

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Two() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handlePrevClick() {
    setIndex(index - 1)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      {
        index != 0 ?
          <button onClick={handlePrevClick}>
            Prev
          </button>
          :
          <></>
      }
      {
        index != 11 ?
          <button onClick={handleNextClick}>
            Next
          </button>
          :
          <></>
      }
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
