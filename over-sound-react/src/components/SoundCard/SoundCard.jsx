import React from "react";
import {
  DivCardSC,
  GenreNameSC,
  LinkSoundSC,
  SoundCardImgSC,
  TitlePackSC,
  TypeCardSC,
} from "../../styled-component/style.sound-card";
import SoundCardImg from "../../image/dynoxandromeda.jpg";

const SoundCard = (props) => {
  return (
    <>
      <LinkSoundSC to='/'>
        <DivCardSC>
          <SoundCardImgSC src={SoundCardImg} />
          <TitlePackSC>Dynox Andromeda</TitlePackSC>
          <GenreNameSC>Hyper Pop</GenreNameSC>
          <TypeCardSC>Sample Pack</TypeCardSC>
        </DivCardSC>
      </LinkSoundSC>
    </>
  );
};

export default SoundCard;
