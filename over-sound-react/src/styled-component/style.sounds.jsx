import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivContainerSC = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
  width: 95vw;
  max-width: 1200px;
  height: 100%;
  height: 700px;
  position: relative;
  margin: 0 auto;
  //border: 2px solid green;
  padding-top: 100px;
`;

export const DivContentBox = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
  width: 100%;
  height: 100%;
  grid-gap: 40px;
`;

export const InputSearchSC = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #efefef;
  color: black;
  font-weight: 400;
  font-size: 20px;
  :focus {
    background-color: #e0e0e0;
    border: none;
    outline: none;
  }

`;


