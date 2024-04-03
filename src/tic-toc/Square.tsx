// import { useState } from "react";

export default function Square({ value, onSquareClick }: any) {
  //   const [value, setValue] = useState<string | null>(null);
  //   const handleClick = () => {
  //     setValue("X");
  //   };
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
