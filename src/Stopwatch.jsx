import React,{useState} from 'react';

function Stopwatch() {
  const [currentState, setCurrentState] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = React.useRef();

  const onStart = () => {
    if (currentState === 'Start') return;
    setCurrentState('Start');
    intervalRef.current = setInterval(() => {
      setCurrentTime((currentTime) => currentTime + 50);
    }, 50);
  };

  const onStop = () => {
    if (currentState === 'STOP') return;
    setCurrentState('STOP');
    clearInterval(intervalRef.current);
  };

  const onReset = () => {
    if (currentState === 'RESET') return;
    setCurrentTime(0);
    clearInterval(intervalRef.current);
  };

  const sec = Math.floor(currentTime / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const millis = (currentTime % 1000).toString().padStart(3, "0");
  const seconds = (sec % 60).toString().padStart(2, "0");
  const minutes = (min % 60).toString().padStart(2, "0");
  const hours = (hour % 24).toString().padStart(2, "0");

  return (
    <div className="boxx">
    <div className='stopwatch'>
      <div className="timer">
        {hours}:{minutes}:{seconds}:{millis}
      </div><br />
        <div className='wbtn'>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button> <br /></div><br />
      <div className='reset'>
        <button onClick={onReset}>Reset</button>
      </div> <br />
      
      
    </div>
    </div>
  );
}
export default Stopwatch