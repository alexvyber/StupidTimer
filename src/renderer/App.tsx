import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { useState } from 'react';
import { CountDown } from './CountDown';
import { v4 as uuidv4 } from 'uuid';

type Timer = {
  id: number;
  name: string;
  initialTime: number;
};
const Hello = () => {
  const [timers, setTimers] = useState<Timer[]>([] as Timer[]);

  const [initialTime, setInitialTime] = useState();
  const [name, setName] = useState();

  console.debug(timers);

  const handleClick = (e) => {
    if (name == '' || !initialTime) {
      alert("Please enter legitimate input");
    } else {
      setTimers([...timers, { id: uuidv4(), name, initialTime }]);
    }
    setName('');
    setInitialTime('');
  };

  function removeTimer() {
    return function (id) {
      setTimers(timers.filter((t) => t.id !== id));
    };
  }

  return (
    <div>
      <div className="Hello"></div>
      <h1>Timer </h1>

      <form id="timer">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-number"
            placeholder="Name for the timer"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="time">
            {' '}
            {initialTime ? `${initialTime} minutes` : 'Time'}{' '}
          </label>
          <input
            id="time"
            value={initialTime}
            onChange={(e) => setInitialTime(e.target.value)}
            className="input-number"
            placeholder="Time in minutes"
            type="number"
          />
        </div>
      </form>
      <div className="Hello" style={{ marginBottom: '30px' }}>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="books">
            ⏱️{' '}
          </span>
          Start the Timer!
        </button>
      </div>

      <section style={{ paddingTop: '30px' }}>
        {timers.length > 0 ? (
          timers.map((timer) => (
            <CountDown {...timer} removeTimer={removeTimer()} key={timer.id} />
          ))
        ) : (
          <h1>No timers set</h1>
        )}
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
