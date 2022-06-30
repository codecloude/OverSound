import React, { useState, useEffect } from "react";
import PlaySoundBox from "../components/PlaySound/PlaySoundBox";
import {
  DivContainerSC,
  DivContentBox,
  InputSearchSC,
} from "../styled-component/style.sounds";
import { items } from "../components/PlaySound/data";

const Sounds = () => {
  const [sounds, setSounds] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSounds(items);
  }, []);
  //console.log(items.filter(sound => sound.category.toLowerCase().includes('R')));

  const search = (items) => {
    return items.filter(
      (sound) =>
        sound.category.toLowerCase().includes(query) ||
        sound.bpm.toLowerCase().includes(query) ||
        sound.title.toLowerCase().includes(query) ||
        sound.key.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <DivContainerSC>
        <DivContentBox>
          <InputSearchSC
            type="text"
            placeholder="Поиск..."
            onChange={(e) => setQuery(e.target.value)}
          />

          {sounds
            .filter(
              (sound) =>
                sound.category.toLowerCase().includes(query) ||
                sound.bpm.toLowerCase().includes(query) ||
                sound.title.toLowerCase().includes(query) ||
                sound.key.toLowerCase().includes(query)
            )
            .map((sound) => {
              return <PlaySoundBox key={sound.itemId} sound={sound} />;
            })}
        </DivContentBox>
        {/* <WaveForm/> */}
      </DivContainerSC>
    </>
  );
};

export default Sounds;
