import React from "react";
import { CardWrapper } from "../styled/PortfolioStyled";

function PortfolioCard(props: {
  cards: {
    href: string;
    img: string;
    title: string;
    skills: string;
  };
}) {
  return (
    <CardWrapper>
      <div className="hoverover">
        <a href={`${props.cards.href}`}>
          <img src={`${props.cards.img}`} alt=""></img>
          <h1>{props.cards.title}</h1>
        </a>
        <div className="pWrapper">
          <h3>사용한 기술</h3>
          <p>{props.cards.skills}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default PortfolioCard;
