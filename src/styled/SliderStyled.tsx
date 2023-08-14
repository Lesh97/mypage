import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderTitle = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 30px;
  margin-top: 90px;
  margin-left: 20px;
`;

export const SeeMore = styled.a`
  font-size: 20px;
  text-decoration: none;
`;

export const SliderStyled = styled(Slider)`
  .slideItems {
    width: 500px;
    height: 600px;
    margin: 50px 0px;
    background-color: ${(props) => props.theme.beige.slideBackground};
  }

  .slick-list {
    width: 100%;
    height: 700px;
    padding: 0px;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid orange;
  background-color: ${(props) => props.theme.beige.slideBackground};
  color: ${(props) => props.theme.orange.infoText};
`;
export const NextBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid orange;
  background-color: ${(props) => props.theme.beige.slideBackground};
  color: ${(props) => props.theme.orange.infoText};
  margin-left: 20px;
`;
