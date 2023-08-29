import React, { useEffect, useRef, useState } from "react";
import PortfolioSlider from "../components/PortfolioSlider";
import {
  MainWrapper,
  SelfIntroduce,
  PortfolioSection,
} from "../styled/HomeStyled";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const flexedWords = "소통하는";
  const [wordTitle, setWordTitle] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setWordTitle((TitleValue) => {
        let resultTitle = TitleValue
          ? TitleValue + flexedWords[wordCount]
          : flexedWords[0];
        setWordCount(wordCount + 1);
        if (wordCount >= flexedWords.length) {
          setWordCount(4);
          setWordTitle(wordTitle);
        }
        return resultTitle;
      });
    }, 300);
    return () => {
      clearInterval(typingInterval);
    };
  }, [wordCount]);
  return (
    <>
      <Header></Header>
      <MainWrapper id="intro">
        <SelfIntroduce>
          <div className="IntroWrapper">
            <div className="fixedIntro">
              안녕하세요.
              <div className="flexIntro">
                {wordTitle} <span>|</span>
              </div>
              프론트엔드 개발자 이수현입니다.
            </div>
            <div className="horizontal"></div>
          </div>
          <div className="mySkills" id="skills">
            <h2>사용하는 기술</h2>
            <div className="skillbar">
              <div className="skillTitle">Front-End</div>
              <div className="frontskills">
                <img src="/logos/cssLogo.png"></img>
                <img src="/logos/htmlLogo.png"></img>
                <img src="/logos/jsLogo.png"></img>
                <img src="/logos/nodeLogo.png"></img>
                <img src="/logos/reactLogo.png"></img>
                <img src="/logos/recoilLogo.png"></img>
                <img src="/logos/reduxLogo.png"></img>
              </div>
            </div>

            <div className="skillbar">
              <div className="skillTitle">Back-End</div>
              <div className="backskills">
                <img src="/logos/graphqlLogo.png"></img>
                <img src="/logos/mongodbLogo.png"></img>
              </div>
            </div>

            <div className="skillbar">
              <div className="skillTitle">FrameWork</div>
              <div className="framework">
                <img src="/logos/gatsbyLogo.png"></img>
                <img src="/logos/expressLogo.png"></img>
                <img src="/logos/pugLogo.png"></img>
              </div>
            </div>
            <div className="skillbar">
              <div className="skillTitle">Deployment</div>
              <div className="deployments">
                <img src="/logos/netlifyLogo.png"></img>
                <img src="/logos/herokuLogo.png"></img>
              </div>
            </div>

            <div className="skillbar">
              <div className="skillTitle">Communication</div>
              <div className="communications">
                <img src="/logos/figmaLogo.png"></img>
              </div>
            </div>
          </div>
        </SelfIntroduce>
        <PortfolioSection id="portfolio">
          <PortfolioSlider></PortfolioSlider>
        </PortfolioSection>
        <Footer></Footer>
      </MainWrapper>
    </>
  );
}

export default Home;
