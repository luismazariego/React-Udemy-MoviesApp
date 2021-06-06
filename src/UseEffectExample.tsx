import { useEffect, useState } from 'react';

export default function UseEffectExample() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('component loaded');

    document.title = `${clicks} times`;

    return () => {
      console.log('Component will be destroyed');
    };
  }, [clicks]);

  useEffect(() => {
    //console.log('');
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    console.log('I am going to run just one time');
  }, []); //dependency list empty, makes that this effect just run one time

  // return <span>UseEffect example</span>
  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        You have clicked me {clicks} times
      </button>
      <div>{date.toString()}</div>
    </>
  );
}
