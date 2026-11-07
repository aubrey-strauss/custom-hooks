import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

function DebounceSearchDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce("hello");
  return (
    <>
      <h2>Debounce Search Demo</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>Current input: {searchTerm} </p>
      <p>Debounced value: {debouncedValue} </p>
      <label>
        Delay:{" "}
        <select>
          <option value="0">0 ms</option>
          <option value="500">500 ms</option>
          <option value="1000">1000 ms</option>
          <option value="2000">2000 ms</option>
        </select>
      </label>
    </>
  );
}

export default DebounceSearchDemo;
