import React, { useState, useEffect } from "react";
import {
  DateAddSC,
  DivSoundBoxSC,
  DivSoundNameDateSC,
  DivSoundWaveSC,
  DivTagsSC,
  TagsSC,
  TagValueSC,
  TitleSoundSC,
  AudioSC,
  WaveMusicSC,
  DivPlayerSC,
} from "../../styled-component/style.play-sound";
import { DateTime } from "luxon";
import WaveSurfer from "wavesurfer.js";
import { items } from "./data";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import music from "./audio/happypartoflife.mp3";
import WaveForm from "./WaveForm";

const PlaySoundBox = ({ sound }) => {
  //const [srcMusic, setSrcMusic] = useState("");
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [waveSurfer, setWaveSurfer] = useState(null);

  // useEffect(() => {
  //   for (let index = 0; index < items.length; index++) {
  //     setSrcMusic(items[index].src);
  //   }
  // }, []);

  // useEffect(() => {
  //   setWaveSurfer(
  //     WaveSurfer.create({
  //       barWidth: 4,
  //       cursorWidth: 1,
  //       container: "#waveform",
  //       backend: "WebAudio",
  //       height: 90,
  //       progressColor: "rgba(0, 51, 255, 1)",
  //       responsive: true,
  //       waveColor: "#bcbcbc",
  //       cursorColor: "transparent",
  //     })
  //   );
  // }, []);

  // useEffect(() => {
  //   if (waveSurfer) {
  //     waveSurfer.load(music);
  //   }
  // }, [waveSurfer]);

  // const togglePlayPause = () => {
  //   waveSurfer.playPause();
  //   setIsPlaying(!isPlaying);
  // };
  //console.log(sound.itemId);

  return (
    <>
      <DivSoundBoxSC>
        <DivSoundNameDateSC>
          <TitleSoundSC>{sound.title}</TitleSoundSC>
          <DateAddSC>
            {DateTime.fromISO(sound.date).toFormat("dd MM yyyy")}
          </DateAddSC>
        </DivSoundNameDateSC>
        <DivPlayerSC>
          <WaveForm path={sound.src} index={sound.itemId}/>
        </DivPlayerSC>
        <DivTagsSC>
          <TagsSC>Теги:</TagsSC>
          <TagValueSC>bpm: {sound.bpm}</TagValueSC>
          <TagValueSC>{sound.category}</TagValueSC>
          <TagValueSC>Key: {sound.key}</TagValueSC>
        </DivTagsSC>
      </DivSoundBoxSC>
      
    </>
  );
};

export default PlaySoundBox;
