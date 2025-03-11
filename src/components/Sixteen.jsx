import { useState, useRef } from 'react';

export default function Sixteen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef()

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (!isPlaying)
    {
      video.current.play()
    }
    else{
      video.current.pause()
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" ref={video}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
