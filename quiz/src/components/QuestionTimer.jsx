import { useEffect } from 'react';
import { useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout");
    setTimeout((onTimeout, timeout));
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setting interval");
    setInterval(() => {
      
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id='question' max={timeout} value={remainingTime}/>;
}  
