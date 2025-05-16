import { useRef, useEffect } from 'react';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [src]);

  return (
    <audio ref={audioRef} src={src} autoPlay loop />
  );
}

export default AudioPlayer;