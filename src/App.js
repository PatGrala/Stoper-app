import FormattedTime from "./Components/FormattedTime/FormattedTime";
import Button from "./Components/Button/Button";
import { useState, useEffect } from "react";


const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1)
    }, 1));
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer)
    }
  }, []);

  return (
    <div className="main-section">
      <div className="stopwatch">
        <FormattedTime time={time} />
        <Button action={start}>Start</Button>
        <Button action={stop}>Stop</Button>
        <Button action={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default App;
