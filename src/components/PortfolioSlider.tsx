import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  SliderStyled,
  SliderTitle,
  PrevBtn,
  NextBtn,
  SliderWrapper,
  BtnWrapper,
  SeeMore,
} from "../styled/SliderStyled";

export default class PortfolioSlider extends Component {
  slider: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerPadding: "60px",
      slidesToScroll: 1,
      centerMode: true,
      lazyload: true,
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
          <SliderStyled ref={(c: any) => (this.slider = c)} {...settings}>
            <div className="slideItems">
              <h3>1</h3>
            </div>
            <div className="slideItems">
              <h3>2</h3>
            </div>
            <div className="slideItems">
              <h3>3</h3>
            </div>
            <div className="slideItems">
              <h3>4</h3>
            </div>
            <div className="slideItems">
              <h3>5</h3>
            </div>
            <div className="slideItems">
              <h3>6</h3>
            </div>
          </SliderStyled>
          <BtnWrapper>
            <PrevBtn onClick={this.previous}>이전</PrevBtn>
            <NextBtn onClick={this.next}>다음</NextBtn>
          </BtnWrapper>
        </SliderWrapper>
      </>
    );
  }
}
