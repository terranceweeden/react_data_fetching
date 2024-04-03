import { useEffect, useState } from "react";

export default function UseEffectToggle() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("effect renders!");
    return () => {
      console.log("Clean function");
      console.log("done cleanup function");
    };
  }, [toggle]);
  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}
