import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import stop from "../image/stop.png";
import play from "../image/play.png";

export const DivSoundBoxSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);

  width: 100%;
  height: max-content;
  background-color: #f2f2f2;
  border-radius: 5px;
  position: relative;
`;

export const DivSoundNameDateSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  height: 60px;
  background-color: #d9d9d9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 50px;
  padding-right: 50px; */
`;

export const TitleSoundSC = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-left: 50px;
`;

export const DateAddSC = styled.h3`
  font-weight: 500;
  font-size: 20px;
  margin-right: 50px;
`;

export const DivPlayerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: left;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 50px; */
`;

export const DivTagsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(6, max-content);
  width: 100%;
  height: 60px;
  background-color: #d9d9d9;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  //justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
  /* position: absolute;
  bottom: 0; */
`;

export const TagsSC = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-left: 50px;
`;

export const TagValueSC = styled.h1`
  font-weight: 400;
  font-size: 20px;
  margin-left: 50px;
`;

export const AudioSC = styled.audio``;

export const WaveMusicSC = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  padding-top: 5px;
`;

export const WaveformContianerSC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 100px;
  width: auto;
  max-width: 1000px;
  background: transparent;
  gap: 2rem;
  padding-left: 50px;
  padding-right: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const DivButtonSC = styled.div`
  cursor: pointer;
`;

export const PlayButtonSC = styled.div`
  background-image: url(${play});
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
  background-size: 45px;
  display: grid;
  align-items: end;
`;

export const PauseButtonSC = styled.div`
  background-image: url(${stop});
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
  background-size: 40px;
  display: grid;
  align-items: end;
`;
