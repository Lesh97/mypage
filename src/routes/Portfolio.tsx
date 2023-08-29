import React, { useState } from "react";
import { PortfolioWrapper, PortfolioGrid } from "../styled/PortfolioStyled";
import data from "../portfoliodata";

import PortfolioCard from "../components/PortfolioCard";
import { Outlet } from "react-router-dom";
import PortHeader from "../components/PortHeader";
import Footer from "../components/Footer";

function Portfolio() {
  let [cards, setCards] = useState(data);
  return (
    <>
      <PortHeader></PortHeader>
      <PortfolioWrapper>
        <PortfolioGrid>
          {cards &&
            cards.map((a: any, i: number) => {
              return <PortfolioCard cards={cards[i]} key={i} />;
            })}
        </PortfolioGrid>
      </PortfolioWrapper>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
