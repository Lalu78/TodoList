import React from "react";
import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState("");

  const click = () => {
    setCount(count + 1);
  };
  const Click = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const OnChangeValue = (e) => {
    const fal = e.target.value;
    setFruits(fal);
  };

  return (
    <div class="parent">
      <div class="child">
        <div min_child>
          <h1>
            
            Counter:<span>{count}</span>
          </h1>
          <button onClick={click}>+ve</button>
          <button onClick={Click}>-ve </button>
                  <select onChange={OnChangeValue}>
          
            <option> Select Fruits</option>
            <option >Mango</option>
            <option >Apple</option>
            <option >Banana</option>
            <option value="gp">Grapes</option>
                  </select>
                  
          <input type="text" value={fruits} />
          <input type="date" />
        </div>
      </div>
    </div>
  );
}

export default Counter;
