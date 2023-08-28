import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useRef, useState } from "react";
import {
  SliderStyled,
  SliderTitle,
  SliderWrapper,
  BtnWrapper,
  SeeMore,
  PrevBtn,
  NextBtn,
} from "../styled/SliderStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import popupProps from "../PopupProps";
import Popup from "../components/Popup";

interface IArrowProps {
  onClick: any;
}

const ReactSlick = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popProps, setPopProps] = useState(popupProps);

  const showPopup = () => {
    setPopupOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    centerMode: true,
    lazyload: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
  };

  return (
    <>
      <SliderWrapper>
        <SliderTitle>
          포트폴리오{" "}
          <SeeMore href="/portfolio">
            전체보기 <FontAwesomeIcon icon={faAnglesRight} />
          </SeeMore>
        </SliderTitle>
        <SliderStyled {...settings}>
          {popProps &&
            popProps.map((a: any, i: number) => {
              return <Popup popProps={popProps[i]} key={i} />;
            })}

          <div className="slideItems">
            <div className="imgdiv" onClick={showPopup}>
              {isPopupOpen && <Popup popProps={popProps[0]} />}

              <img src="/cardImg/youtubeImg.png"></img>
            </div>
          </div>
          <div className="slideItems">
            <div className="imgdiv" onClick={showPopup}>
              {isPopupOpen && <Popup popProps={popProps[1]} />}

              <img src="/cardImg/ottImg.png"></img>
            </div>
          </div>
          <div className="slideItems">
            <div className="imgdiv" onClick={showPopup}>
              {isPopupOpen && <Popup popProps={popProps[2]} />}
              <img src="/cardImg/shoppingImg.png"></img>
            </div>
          </div>
          <div className="slideItems">
            <div className="imgdiv" onClick={showPopup}>
              {isPopupOpen && <Popup popProps={popProps[3]} />}
              <img src="/cardImg/todoImg.png"></img>
            </div>
          </div>
        </SliderStyled>
        <BtnWrapper></BtnWrapper>
      </SliderWrapper>
    </>
  );
};
const PrevArrow = ({ onClick }: IArrowProps) => {
  return (
    <PrevBtn onClick={onClick} type="button">
      이전
    </PrevBtn>
  );
};
const NextArrow = ({ onClick }: IArrowProps) => {
  return (
    <NextBtn onClick={onClick} type="button">
      다음
    </NextBtn>
  );
};

export default ReactSlick;
