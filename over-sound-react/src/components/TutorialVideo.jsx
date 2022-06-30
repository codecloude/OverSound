import React, { useState, useEffect } from "react";
import {
  DivItemSC,
  DivItemVideoSC,
  IframeVideoSC,
} from "../styled-component/style.tutorial-video";

const TutorialVideo = ({ setSrc }) => {
  const [srcVideo, setSrcVideo] = useState("");
  useEffect(() => {
    if (setSrc) {
      setSrcVideo(setSrc);
    }
  }, [setSrc]);
  return (
    <>
      <DivItemVideoSC>
        <IframeVideoSC
          src={srcVideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></IframeVideoSC>
      </DivItemVideoSC>
    </>
  );
};

export default TutorialVideo;
