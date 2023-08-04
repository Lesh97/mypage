import React from "react";
import {
  MainWrapper,
  SelfIntroduce,
  PortfolioSlider,
  ContactMe,
} from "../styled/HomeStyled";

function Home() {
  return (
    <>
      <MainWrapper>
        <SelfIntroduce>나를 간단하게 소개하는 섹터</SelfIntroduce>
        <PortfolioSlider>
          내 포폴 슬라이더 또는 넘기면서 간단하게 보는 곳/ 포폴페이지로 갈수있게
        </PortfolioSlider>
        <ContactMe>나랑 연락할 수 있는 곳 이메일, 인스타</ContactMe>
      </MainWrapper>
    </>
  );
}

export default Home;
