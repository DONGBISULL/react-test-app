import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function AppCounter() {
  const [count, setCount] = useState(0);

  function handleCnt(){
    setCount((pre)=>pre+1);
  }

  return (
    <div className="container">
      <div className="banner">
        Total Count : {count} {count > 10 ? "🔥" : "🍀"}
      </div>
      <div>
        <Counter total={count} onClick={handleCnt} />
        <Counter total={count} onClick={handleCnt} />
      </div>
    </div>
  );
}

export default AppCounter;
