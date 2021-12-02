import { useRef, useEffect } from "react";

const useEventListener = (element = window, event = "click", callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!element) return;
    function handler(e) {
      callbackRef.current(e);
    }

    element.addEventListener(event, handler);
    return () => element.removeEventListener(event, handler);
  }, [event, element]);
};

export default useEventListener;
