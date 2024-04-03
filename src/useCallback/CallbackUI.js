import { useState } from "react";
import Callback from "./useCallback";

export default function CallbackUI() {
  const [UIcolor, setUIColor] = useState(null);

  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <div style={{ background: `${UIcolor}` }}></div>
      <Callback getColor={getColor} />
    </div>
  );
}
