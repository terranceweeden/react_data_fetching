import { useState } from "react";
import useRenderTimes from "./UseRenderTimes";

function getRandomHEX() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const Header = () => {
  const [color, setColor] = useState("#111");
  const count = useRenderTimes();
  //   console.log(count);
  return (
    <header style={{ backgroundColor: color }}>
      <p> Header component has a re-rendered {count} times</p>
      <button onClick={() => setColor(getRandomHEX())}>Click</button>
    </header>
  );
};

export default Header;
