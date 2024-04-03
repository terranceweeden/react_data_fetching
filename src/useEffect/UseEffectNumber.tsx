import { useEffect, useState } from "react";

export default function UseEffectNumber() {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   console.log("Effect Render!");
  //   const interval = setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // console.log("State rendered!");
  return (
    <div>
      <h1>Number useEffect</h1>
      {number}
    </div>
  );
}
