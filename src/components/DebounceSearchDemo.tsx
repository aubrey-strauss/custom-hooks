function DebounceSearchDemo() {
  return (
    <>
      <h2>Debounce Search Demo</h2>
      <input placeholder="Search..." />
      <p>Current input: </p>
      <p>Debounced value: </p>
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
