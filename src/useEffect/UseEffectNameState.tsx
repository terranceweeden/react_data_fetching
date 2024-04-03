import { useEffect, useState } from "react";

export default function UseEffectNameState() {
  const [name, setName] = useState("");
  const [isSelected, setIsSelcted] = useState({
    name: "",
    selected: false,
  });

  useEffect(() => {
    console.count("The state has changes!");
  }, [isSelected.name, isSelected.selected]);

  const handleAdd = () => {
    setIsSelcted((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setIsSelcted((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <h1>Name Space</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleAdd}>Add Name</button>
      <br />
      <button onClick={handleSelect}>Select</button>
      <br />
      {`Name: ${isSelected.name},Selected: ${isSelected.selected.toString()}`}
    </div>
  );
}
