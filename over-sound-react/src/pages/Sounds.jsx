import React, { useState, useEffect } from "react";
import PlaySoundBox from "../components/PlaySound/PlaySoundBox";
import {
  DivContainerSC,
  DivContentBox,
  InputSearchSC,
} from "../styled-component/style.sounds";
import { items } from "../components/PlaySound/data";

const Sounds = () => {
  //const [sounds, setSounds] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   setSounds(items);
  // }, []);
  //console.log(items.filter(sound => sound.category.toLowerCase().includes('R')));

  return (
    <>
      <DivContainerSC>
        <DivContentBox>
          <PlaySoundBox />
        </DivContentBox>
      </DivContainerSC>
    </>
  );
};

export default Sounds;
