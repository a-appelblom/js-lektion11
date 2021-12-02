import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

export default function StoreMe() {
  const [inputState, setInput] = useState("");
  const [inputStorage, setInputStorage] = useStorage("test");

  function handleSubmit(e) {
    e.preventDefault();
    setInputStorage(inputState);
    console.log(inputState);
    console.log(inputStorage);
  }

  return (
    <div>
      <h1>{inputStorage}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputState}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
