// File is .ts, not .tsx, because there’s no JSX in a hook.
import { useState, useEffect } from "react";

// Waits until `value` stops changing for `delay` ms, then returns it.
export function useDebounce(value: string, delay: number = 500) {
  // The "settled" value. Starts as whatever was passed in.
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Start a timer: when it finishes, save the latest value.
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: runs before the next effect, cancelling the old timer.
    // Each keystroke cancels the last countdown, so only the final one finishes.
    return () => clearTimeout(timerId);
  }, [value, delay]); // Restart whenever the value or delay changes.

  return debouncedValue;
}
