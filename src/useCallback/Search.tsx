import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log("Search Render...");
  return (
    <input
      type="text"
      placeholder="Seach users"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);
