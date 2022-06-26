import React from "react";
import {
  DivBoxLogoSC,
  DivWrapNavBarSC,
  DivHeaderSC,
  DivLogoSC,
  DivNavBarColumnsLeftSC,
  DivNavBarColumnsRightSC,
  DivProfileNavBarSC,
  DivVolumeNavBarSC,
  LinkNavBarSC,
  DivBoxNavBarSC,
  LinkLogoSC,
} from "../styled-component/style.header";

const Header = () => {
  return (
    <>
      <DivHeaderSC>
        <DivBoxLogoSC>
        <LinkLogoSC to='/'>
        <DivLogoSC/>
        </LinkLogoSC>
          <LinkLogoSC to='/'>oversound</LinkLogoSC>
        
          
        </DivBoxLogoSC>
        <DivWrapNavBarSC>
          <DivBoxNavBarSC>
            <DivNavBarColumnsLeftSC>
              <LinkNavBarSC to="/">Главная</LinkNavBarSC>
              <LinkNavBarSC to="/sounds">Звуки</LinkNavBarSC>
            </DivNavBarColumnsLeftSC>
            <DivNavBarColumnsRightSC>
              <DivVolumeNavBarSC></DivVolumeNavBarSC>
              <DivProfileNavBarSC></DivProfileNavBarSC>
            </DivNavBarColumnsRightSC>
          </DivBoxNavBarSC>
        </DivWrapNavBarSC>
      </DivHeaderSC>
    </>
  );
};

export default Header;
