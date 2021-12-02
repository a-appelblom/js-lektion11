import React from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleMe() {
  const [myTruth, setMyTruth] = useToggle(true);
  return (
    <div>
      {myTruth ? (
        <h1>Can you really handle my truth, I doubt it</h1>
      ) : (
        <h1>Do you wanna know a secret</h1>
      )}
      <button onClick={setMyTruth}>Toggle me</button>
      <button onClick={() => setMyTruth(true)}>Reveal my Truth</button>
      <button onClick={() => setMyTruth(false)}>Hide my Truth</button>
    </div>
  );
}
