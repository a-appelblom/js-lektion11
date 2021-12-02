import React from "react";
import useIsLoggedIn from "../hooks/useIsLoggedIn";

export default function HomeHero() {
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();
  return (
    <div>
      <h1>Hello lektion 11</h1>
      <p>This is lektion 11</p>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>Logga in</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Logga ut</button>
      )}
    </div>
  );
}
