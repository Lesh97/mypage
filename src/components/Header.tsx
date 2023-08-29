import React, { useRef } from "react";

import {
  HeaderWrapper,
  HeaderCategory,
  CategoryFont,
} from "../styled/HeaderStyled";

function Header() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const portRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const introClick = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const skillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const portClick = () => {
    portRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderCategory>
          <CategoryFont href="/">Home</CategoryFont>
          <CategoryFont href="#intro" onClick={introClick}>
            Intro
          </CategoryFont>
          <CategoryFont href="#skills" onClick={skillClick}>
            Skills
          </CategoryFont>
          <CategoryFont href="#portfolio" onClick={portClick}>
            Portfolio
          </CategoryFont>
          <CategoryFont href="#contact" onClick={contactClick}>
            Contact
          </CategoryFont>
        </HeaderCategory>
      </HeaderWrapper>
    </>
  );
}

export default Header;
