import React, { useState } from "react";
import useEventListener from "../hooks/useEventListener";

export default function TriggerMe() {
  const [state, setState] = useState("Hello");
  useEventListener(window, "keydown", (e) => {
    setState(e.key);
  });
  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
}
