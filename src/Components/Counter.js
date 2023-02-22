import React, { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  const storedValueAsNumber = Number(localStorage.getItem("count"));
  const [count, setCount] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );

  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  return (
    <div>
      <div className="counter">{count}</div>
      <hr className="hr"></hr>
      <div className="buttons">
        <button className="button1" onClick={() => setCount((c) => c - 1)}>
          -
        </button>
        <button className="button2" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
