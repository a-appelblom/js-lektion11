import React, { useRef, useEffect } from "react";
import useVideo from "../hooks/useVideo";

export default function ShowMe() {
  const vidRef = useRef();
  const { loading, togglePlay } = useVideo(vidRef);

  useEffect(() => {
    console.log(loading);
  }, [loading]);
  return (
    <div>
      <video
        style={{ height: "400px", width: "600px", border: "1px solid red" }}
        ref={vidRef}
      />

      {!loading && <button onClick={togglePlay}>Play / Pause</button>}
    </div>
  );
}
