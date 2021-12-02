import React, { useRef, useEffect } from "react";
import Divider from "../components/divider";
import HomeHero from "../components/HomeHero";
import ShowMe from "../components/ShowMe";
import StoreMe from "../components/StoreMe";
import ToggleMe from "../components/ToggleMe";
import TranslateMe from "../components/TranslateMe";
import TriggerMe from "../components/TriggerMe";

export default function Home() {
  //   const myRef = useRef();
  //   const counter = useRef(1);
  //   useEffect(() => {
  //     console.log(myRef.current);
  //   }, [myRef]);

  //   useEffect(() => {
  //     console.log("rerender");
  //   });

  return (
    <div>
      <HomeHero />
      <Divider />
      <ToggleMe />
      <Divider />
      <StoreMe />
      <Divider />
      <TriggerMe />
      <Divider />
      <TranslateMe />
      <Divider />
      <ShowMe />
      <Divider />

      {/* <div ref={myRef}>
        <p>Hej Svej</p>
      </div> */}
      {/* <button
        onClick={() => {
          counter.current++;
          console.log(counter.current);
        }}
      >
        {counter.current}
      </button> */}
    </div>
  );
}
