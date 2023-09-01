import React, { useState } from "react";
import { CardLink, CardWrapper } from "../styled/PortfolioStyled";

function PortfolioCard(props: {
  cards: {
    id: number;
    img: string;
    title: string;
    skills: string;
    logos: string[];
  };
}) {
  let [outImg, setOutImg] = useState(props.cards.logos);
  return (
    <>
      <CardWrapper>
        <CardLink
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
            <div className="cardSkills">
              {outImg.map((a: any, i: number) => {
                return <img src={`${outImg[i]}`}></img>;
              })}
            </div>
          </div>
        </CardLink>
      </CardWrapper>
    </>
  );
}

export default PortfolioCard;
