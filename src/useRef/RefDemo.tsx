import { useEffect, useRef, useState } from "react";

export default function RefDemo() {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref", countRef.current);
  };

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}
