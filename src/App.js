import React, { useState, useEffect } from "react";
import "./App.css";

const INITIAL_COUNT = 0;

const Timer = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("acted!");
    const timer = setInterval(countIncrement, 1000);
    return () => {
      console.log("deleted");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <p>current:{count}</p>
      <button onClick={countReset}>RESET</button>
    </div>
  );
};

export default function App() {
  const [display, toggleDisplay] = useState(false);

  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };

  return (
    <>
      <button onClick={handleToggleDisplay}>
        {display ? "hidden" : "visible"}
      </button>
      {display && <Timer />}
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   const [countSecond, setCountSecond] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const addCount = () => {
//     setCount(count + 1);
//   };

//   const subtractSecondCount = () => {
//     setCountSecond(countSecond - 1);
//   };

// const timer = () => {
//   set
// }

// useEffect(() => {
//   const interval = setInterval(() => {
//     setSeconds((seconds) => seconds + 1);
//   }, 1000);
//   // return () => clearInterval(interval);
// }, []);

//   return (
//     <div className="App">
//       <button onClick={addCount}>Add</button>
//       <button onClick={subtractSecondCount}>Subtract</button>
//       {/* <button onClick={seconds}>Seconds</button> */}
//       <p>{count}</p>
//       <p>{countSecond}</p>
//       <p>{seconds}</p>
//     </div>
//   );
// }

// export default App;
