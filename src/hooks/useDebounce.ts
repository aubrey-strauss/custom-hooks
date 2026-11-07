// File is .ts, not .tsx, because there’s no JSX in a hook.
import { useState } from "react";
export function useDebounce(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  return debouncedValue;
}
