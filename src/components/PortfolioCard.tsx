import React from "react";
import { useNavigate } from "react-router-dom";
import { CardWrapper } from "../styled/PortfolioStyled";
import PortfolioPage from "./PortfolioPage";

function NavigatePortfolioPage() {
  const navigate = useNavigate();
  navigate("/portfolio/1");
}

function PortfolioCard(props: {
  cards: {
    img: string;
    title: string;
    skills: string;
  };
}) {
  /**
   *  href 로 연결하는건 좋은데 아직 페이지 구현을 못했음
   *  123456 숫자를 어떻게 받아올지 생각해봐야함
   *  portfolio/숫자 기 때문에 아마도 :id 활용하면 되지 않을까 생각
   *  현재 리액트 훅 에러발생
   */
  return (
    <CardWrapper>
      <div className="hoverover">
        <div onClick={NavigatePortfolioPage}>
          <img src={`${props.cards.img}`} alt=""></img>
          <h1>{props.cards.title}</h1>
        </div>
        <div className="pWrapper">
          <h3>사용한 기술</h3>
          <p>{props.cards.skills}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default PortfolioCard;
