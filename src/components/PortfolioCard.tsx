import React from "react";
import { Link } from "react-router-dom";
import { CardWrapper } from "../styled/PortfolioStyled";

function PortfolioCard(props: {
  cards: {
    id: number;
    img: string;
    title: string;
    skills: string;
  };
}) {
  return (
    <>
      <CardWrapper>
        <Link
          to={`${props.cards.id}`}
          className="hoverover"
          id={`${props.cards.id}`}
        >
          <div>
            <img src={`${props.cards.img}`} alt=""></img>
            <h1>{props.cards.title}</h1>
          </div>
          <div className="pWrapper">
            <h3>사용한 기술</h3>
            <p>{props.cards.skills}</p>
          </div>
        </Link>
      </CardWrapper>
    </>
  );
}

export default PortfolioCard;
