import { useState } from 'react';

const getTime = (time) => {
  return `h: ${Math.floor(time / 60 / 60)} m: ${Math.floor(
    (time / 60) % 60
  )} s: ${time % 60}`;
};
export const CountDown = ({ name, initialTime, id, removeTimer }) => {
  const [time, setTime] = useState(initialTime * 60);

  function handleRemove() {
    removeTimer(id);
  }

  if (time > 0) {
    setTimeout(() => setTime(time - 1), 1000);
    return (
      <>
        <h1>
          {name}: {getTime(time)}
        </h1>

        <button onClick={handleRemove}>Remove</button>
      </>
    );
  } else {
    return <><h1>{name}: Time is over!</h1>
        <button onClick={handleRemove}>Remove</button></>
  }
};
