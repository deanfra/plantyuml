import { useState, useEffect } from "react";

export const useDebounce = (fn: () => void, deps: unknown[]) => {
  const [timeoutState, setTimeoutState] = useState<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timeoutState as NodeJS.Timeout);
    setTimeoutState(setTimeout(fn, 300));
  }, deps);
};
