import { useEffect, useState } from "react";

export default function UseEffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.count("useEffect renders!");
    document.title = `Count: ${count}`;
  }, [count]);

  //This is an artificially slows down rendering
  //   let now = performance.now();
  //   while (performance.now() - now < 400) {
  //     //Do nothing for a bit...
  //   }
  console.count("component renders!");
  return (
    <div>
      <h1>Hook Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
}
