import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivRowsHomeSC = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
`;

export const DivWrapHomeSC = styled.div`
  background-image: url(https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_1400,dpr_1.0/v1601067656/marketing_site/sounds_v2/featuresSounds-hero_2x.jpg);
  background-repeat: no-repeat;
  background-position: center;
  height: 778px;
  width: 100%;
  background-size: cover;
`;

export const DivBoxContentSC = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  //border: 2px solid white;
  align-items: center;
`;

export const DivStartBoxSC = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
  //border: 2px solid green;
  width: 100%;
  height: 300px;
  align-items: center;
`;

export const TitleSC = styled.h1`
  color: white;
  text-align: start;
  font-size: 65px;
  font-weight: 700;
  line-height: 65px;
`;

export const ParagraphSC = styled.p`
  color: white;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  width: 400px;
  //line-height: 80px;
`;

export const LinkHomeStartSC = styled(Link)`
  text-decoration: none;
  background-color: rgba(0, 51, 255, 1);
  color: white;
  width: 160px;
  height: 50px;
  font-size: 18px;
  font-weight: 520;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgba(0, 44, 221, 1);
  }
  :active {
    background-color: rgba(0, 35, 178, 1);
  }
`;

export const DivBoxTextSC = styled.div`
  width: 95vw;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  //border: 2px solid blue;
  justify-content: start;
  margin-top: 70px;
  margin-bottom: 25px;
`;

export const TitlePlusSC = styled.h1`
  color: black;
  text-align: start;
  font-size: 32px;
  font-weight: 600;
`;

export const DivBoxPlusesSC = styled.div`
  display: grid;
  @media (min-width: 1191px) {
    grid-template-columns: repeat(4, 270px);
  }
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  //border: 2px solid blue;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1190px) {
    grid-template-columns: repeat(2, 270px);
    justify-content: space-around;
    //grid-template-rows: repeat(4, max-content);
    grid-gap: 40px;
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(1, 270px);
    justify-content: space-around;
    //grid-template-rows: repeat(4, max-content);
    grid-gap: 40px;
  }
  margin-bottom: 100px;
`;

export const DivPlusBoxSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-gap: 8px;
  width: 100%;
  height: 100%;
  //border: 2px solid black;
`;

export const ImgPlusBoxSC = styled.img`
  width: 270px;
`;

export const PlusNameSC = styled.h2`
  color: black;
  text-align: start;
  font-size: 20px;
  font-weight: 520;
`;

export const PlusDescSC = styled.h3`
  color: black;
  text-align: start;
  font-size: 16px;
  font-weight: 450;
`;

export const DivBoxNewSoundsSC = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  grid-gap: 20px;
  position: relative;
  margin: 0 auto;
  //border: 2px solid blue;
  align-items: center;
  //padding-bottom: 100px;
`;

export const DivTitleBoxSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  //grid-template-rows: repeat(auto-fit, max-content);
  align-items: baseline;
  grid-gap: 15px;
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  //border: 2px solid blue;
`;

export const LinkAllSoundsSC = styled(Link)`
  text-decoration: none;
  color: #000aff;
  font-weight: 400;
  font-size: 18px;
`;

export const DivWhatNewSC = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
  //align-items: baseline;
  //grid-gap: 15px;
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  //border: 2px solid green;
`;

export const TitleWhatNewSC = styled.h3`
  text-align: start;
  font-weight: 600;
  font-size: 22px;
`;

export const DescWhatNewSC = styled.h3`
  text-align: start;
  font-weight: 400;
  font-size: 20px;
  color: #9A9A9A;
`;

export const DivSoundCardBoxSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
  //grid-template-rows: repeat(auto-fit, max-content);
  grid-gap: 15px;
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  //border: 2px solid black;
  justify-content: space-around;
  //margin-bottom: 200px;
`;