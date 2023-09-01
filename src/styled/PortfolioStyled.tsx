import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  background-color: ${(props) => props.theme.beige.background};
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  width: 90%;
  height: 100vh;
  margin-top: 80px;
  margin-bottom: 80px;
  grid-gap: 80px;
`;

export const CardWrapper = styled.div`
  .hoverover {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.beige.slideBackground};
    border-radius: 15px;
    box-shadow: 3px 3px 5px 1px #914100;
  }
  .hoverover:hover {
    transform: scale(1.1);
    transition: all 0.2s linear;
  }
  width: 100%;
  height: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: black;
    img {
      width: 100%;
      height: 70%;
      border-radius: 15px 15px 0px 0px;
    }
  }
  .pWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    img {
      width: 100px;
      height: 100px;
    }
  }

  .cardSkills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    img {
      width: 50px;
      height: 50px;
      margin-left: 5px;
    }
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
