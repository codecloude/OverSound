import React, { useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import { items } from "./data";
import music from "./audio/happypartoflife.mp3";
import {
  DivButtonSC,
  PauseButtonSC,
  PlayButtonSC,
  PlayPauseButtonSC,
  WaveformContianerSC,
  WaveMusicSC,
} from "../../styled-component/style.play-sound";

const WaveForm = ({index, path}) => {
  //const [srcMusic, setSrcMusic] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [idTrack, setIdTrack] = useState('');
  const [pathTrack, setPathTrack] = useState('');

  // useEffect(() => {
  //   for (let index = 0; index < items.length; index++) {
  //     setSrcMusic(items[index].src);
  //   }
  // }, []);

  useEffect(() => {
    setPathTrack(path);
    setIdTrack(index);
    setWaveSurfer(
      WaveSurfer.create({
        container: `#waveform${idTrack}`,
        backend: "WebAudio",
        barWidth: 2.5,
        barRadius: 1.5,
        cursorWidth: 1,
        barGap: 2,
        barMinHeight: 1,
        height: 90,
        progressColor: "rgba(0, 51, 255, 1)",
        responsive: true,
        waveColor: "#bcbcbc",
        cursorColor: "transparent",
      })
    );
  }, []);

  useEffect(() => {
    if (waveSurfer) {
      waveSurfer.load(pathTrack);
    }
  }, [waveSurfer]);

  const togglePlayPause = () => {
    waveSurfer.playPause();
    setIsPlaying(!isPlaying);
  };

  const stopButton = () => {
    waveSurfer.stop();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <WaveformContianerSC>
        <DivButtonSC onClick={isPlaying ? stopButton : togglePlayPause}>
          {isPlaying ? <PauseButtonSC /> : <PlayButtonSC />}
        </DivButtonSC>
        <WaveMusicSC id={"waveform" + idTrack} />
        <audio src={music} />
      </WaveformContianerSC>
    </>
  );
};

export default WaveForm;
