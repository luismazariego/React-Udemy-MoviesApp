import { useEffect, useState } from "react";

export default function ClockExample(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timerId = setInterval(() => {
        setDate(new Date());
      }, 1000);

      return () => clearInterval(timerId);
    });

    return (
      <div>
        <h3>React Example</h3>
        <input />
        <div>{date.toString()}</div>
      </div>
    );
}