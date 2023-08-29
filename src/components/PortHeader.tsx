import React, { useRef } from "react";

import {
  HeaderWrapper,
  HeaderCategory,
  CategoryFont,
} from "../styled/HeaderStyled";

function PortHeader() {
  const contactRef = useRef<HTMLDivElement>(null);

  const contactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderCategory>
          <CategoryFont href="/">Home</CategoryFont>

          <CategoryFont href="#contact" onClick={contactClick}>
            Contact
          </CategoryFont>
        </HeaderCategory>
      </HeaderWrapper>
    </>
  );
}

export default PortHeader;
