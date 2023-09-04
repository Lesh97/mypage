import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeaderCategory,
  CategoryFont,
  HeaderWrapper,
} from "../styled/HeaderStyled";

function Header() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const portRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const introClick = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log(introClick);
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
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <AnimatePresence>
        <HeaderWrapper initial="hidden" animate="visible" variants={variants}>
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
      </AnimatePresence>
    </>
  );
}

export default Header;
