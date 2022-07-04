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
  ButtonDownloadSC,
} from "../../styled-component/style.play-sound";
import { DateTime } from "luxon";
import { items } from "./data";
import WaveForm from "./WaveForm";
import { InputSearchSC } from "../../styled-component/style.sounds";
import Axios from 'axios';
import FileDownload from 'js-file-download';

const PlaySoundBox = () => {
  const [waves, setWaves] = useState([]);
  const [idTrack, setIdTrack] = useState("");
  const [pathTrack, setPathTrack] = useState("");
  const [query, setQuery] = useState("");

  const download = (e) => {
    e.preventDefault()
    Axios({
      url:'http://localhost:3001',
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      FileDownload(res.data, 'downloaded')
    })
  }

  useEffect(() => {
    setIdTrack(items.itemId);
    setPathTrack(items.src);
  }, [idTrack, pathTrack]);
  return (
    <>
      <InputSearchSC
        type="text"
        placeholder="Поиск..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {items
        .filter(
          (sound) =>
            sound.category.toLowerCase().includes(query) ||
            sound.bpm.toLowerCase().includes(query) ||
            sound.title.toLowerCase().includes(query) ||
            sound.key.toLowerCase().includes(query)
        )
        .map((items, index) => (
          <DivSoundBoxSC>
            <DivSoundNameDateSC>
              <TitleSoundSC>{items.title}</TitleSoundSC>
              <DateAddSC>
                {DateTime.fromISO(items.date).toFormat("dd MM yyyy")}
              </DateAddSC>
            </DivSoundNameDateSC>
            <DivPlayerSC>
              <WaveForm path={items.src} index={index} />
              <ButtonDownloadSC onClick={(e) => download(e)}>Скачать</ButtonDownloadSC>
            </DivPlayerSC>
            <DivTagsSC>
              <TagsSC>Теги:</TagsSC>
              <TagValueSC>bpm: {items.bpm}</TagValueSC>
              <TagValueSC>{items.category}</TagValueSC>
              <TagValueSC>Key: {items.key}</TagValueSC>
            </DivTagsSC>
          </DivSoundBoxSC>
        ))}
    </>
  );
};

export default PlaySoundBox;
