import { useMemo, useState } from "react";
import { initialItems } from "./util/initialItems";

interface MemoDemoProps {}

export default function MemoDemo({}: MemoDemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  // console.log("render!");
  // console.count("count renders");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id} </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
