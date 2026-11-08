import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

function DebounceSearchDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(searchTerm, delay);

  useEffect(() => {
    if (debouncedValue === "") return;
    console.log("Searching for:", debouncedValue);
  }, [debouncedValue]);

  return (
    <section className="card">
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
        <select
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        >
          <option value="0">0 ms</option>
          <option value="500">500 ms</option>
          <option value="1000">1000 ms</option>
          <option value="2000">2000 ms</option>
        </select>
      </label>
    </section>
  );
}

export default DebounceSearchDemo;
