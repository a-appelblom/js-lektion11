import { useState, useEffect } from "react";

const useVideo = (element) => {
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getMedia() {
      const mediaStream = await window.navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      element.current.srcObject = mediaStream;
      element.current.play();
      setLoading(false);
    }
    if (element.current) getMedia();
  }, [element]);

  useEffect(() => {
    if (stream && play) element.current.play();
    else element.current.pause();
  }, [play, element, stream]);

  function togglePlay() {
    setPlay((prev) => !prev);
  }

  return { loading, stream, togglePlay };
};

export default useVideo;
