import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import image from "../image/oversoundlogo.svg";
import volume from "../image/volume.png";
import profile from "../image/profile.png";

export const DivHeaderSC = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #121214;
  width: 100vw;
  height: 75px;
  margin: 0 auto;
  //padding-left: 60px;
  //padding-right: 60px;
  
`;

export const DivBoxLogoSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  
  height: 75px;
  align-items: center;
  margin-left: 60px;
`;

export const DivLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  height: 76px;
  width: 70px;
  background-size: 62px;
  display: grid;
  align-items: end;
`;

// export const TitleLogoSC = styled.h1`
//   font-weight: 500;
//   font-size: 32px;
//   line-height: 39px;
//   color: white;
// `;

export const DivWrapNavBarSC = styled.div`
  width: 100%;
  height: 75px;
  //align-items: center;
  //justify-items: end;
  margin-left: -60px;
`;

export const DivBoxNavBarSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 70px;
  width: 100%;
  height: 75px;
  align-items: center;
  justify-content: end;
`;

export const DivNavBarColumnsLeftSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  grid-gap: 25px;
  
`;

export const DivNavBarColumnsRightSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  grid-gap: 40px;
`;

export const LinkNavBarSC = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

export const LinkLogoSC = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: white;
`;

export const DivProfileNavBarSC = styled.div`
  background-image: url(${profile});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 75px;
  width: 35px;
  background-size: 50px;
  display: grid;
  align-items: end;
`;

export const DivVolumeNavBarSC = styled.div`
  background-image: url(${volume});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 75px;
  width: 25px;
  background-size: 25px;
  display: grid;
  align-items: end;
`;
