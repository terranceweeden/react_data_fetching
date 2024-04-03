import { useEffect, useState } from "react";
import Button from "../button/Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  //This is an artificially slows down rendering
  // let now = performance.now();
  // while (performance.now() - now < 1000) {
  //   //Do nothing for a bit...
  // }

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className="App">This is the starting {count}</h1>
      <Button onClick={handleClick}>Increase</Button>
    </div>
  );
}
