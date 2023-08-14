import React, { useState } from "react";
import { PortfolioWrapper, PortfolioGrid } from "../styled/PortfolioStyled";
import data from "../portfoliodata";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  let [cards, setCards] = useState(data);
  return (
    <>
      <PortfolioWrapper>
        <PortfolioGrid>
          {cards &&
            cards.map((a: any, i: number) => {
              return <PortfolioCard cards={cards[i]} key={i} />;
            })}
        </PortfolioGrid>
      </PortfolioWrapper>
    </>
  );
}

export default Portfolio;
