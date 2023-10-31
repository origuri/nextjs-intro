import * as React from "react";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const handleCount = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>hello {counter}</h1>
      <button onClick={handleCount}>click</button>
    </div>
  );
}
