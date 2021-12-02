import { useEffect, useState } from "react";

const storage = window.localStorage;

const useStorage = (key) => {
  const [state, setState] = useState(() => {
    const persisted = storage.getItem(key);
    if (persisted) return JSON.parse(persisted);
  });

  useEffect(() => {
    if (key && state) {
      storage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, setState];
};

export default useStorage;
