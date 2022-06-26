import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const LinkSoundSC = styled(Link)`
  text-decoration: none;
`;

export const DivCardSC = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  background-color: #efefef;
  border-radius: 5px;
  width: 170px;
  height: 250px;
  grid-gap: 5px;
`;

export const SoundCardImgSC = styled.img`
  width: 150px;
  height: 150px;
  padding-top: 10px;
  justify-self: center;
  //border-radius: 3px;
`;

export const TitlePackSC = styled.h1`
  font-weight: 425;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.065em;
  color: black;
  text-align: start;
  padding-left: 10px;
`;

export const GenreNameSC = styled.h1`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.065em;

  color: #9a9a9a;
  text-align: start;
  padding-left: 10px;
`;

export const TypeCardSC = styled.h1`
  font-weight: 450;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.065em;

  color: #8a8a8a;
  text-align: start;
  padding-left: 10px;
  position: absolute;
  bottom: 10px
`;
