import React from "react";
import PortfolioSlider from "../components/PortfolioSlider";
import {
  MainWrapper,
  SelfIntroduce,
  PortfolioSection,
  ContactMe,
  AddressWrapper,
} from "../styled/HomeStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <MainWrapper>
        <SelfIntroduce>
          <div className="IntroWrapper">
            <div className="fixedIntro">
              안녕하세요. <div className="flexIntro">무슨무슨</div> 프론트엔드
              개발자 이수현입니다.
            </div>
            <div className="horizontal"></div>
          </div>
          <div className="mySkills">
            <h2>사용하는 기술</h2>
            <img src="/logos/cssLogo.png"></img>
            <img src="/logos/htmlLogo.png"></img>
            <img src="/logos/jsLogo.png"></img>
            <img src="/logos/nodeLogo.png"></img>
            <img src="/logos/reactLogo.png"></img>
            <img src="/logos/tsLogo.png"></img>
          </div>
        </SelfIntroduce>
        <PortfolioSection>
          <PortfolioSlider></PortfolioSlider>
        </PortfolioSection>
        <ContactMe>
          <AddressWrapper>
            <FontAwesomeIcon icon={faEnvelope} className="email" />
            <h2>E-Mail : </h2>
            <h3> dltngus4652@gmail.com</h3>
          </AddressWrapper>
        </ContactMe>
      </MainWrapper>
    </>
  );
}

export default Home;
