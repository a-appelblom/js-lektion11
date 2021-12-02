import { useState } from "react";

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  function toggle(newVal) {
    if (typeof newVal === "boolean") setState(newVal);
    else return setState((prev) => !prev);
  }

  return [state, toggle];
};

export default useToggle;
