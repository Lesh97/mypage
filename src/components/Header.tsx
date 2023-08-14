import React from "react";

import {
  HeaderWrapper,
  HeaderCategory,
  CategoryFont,
} from "../styled/HeaderStyled";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderCategory>
          <CategoryFont href="/">소개</CategoryFont>
          <CategoryFont href="/portfolio">포트폴리오</CategoryFont>
        </HeaderCategory>
      </HeaderWrapper>
    </>
  );
}

export default Header;
