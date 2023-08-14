import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SelfIntroduce = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.theme.beige.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  .IntroWrapper {
    padding-top: 100px;
    width: 100%;
    font-size: 60px;
    .fixedIntro {
      padding-left: 50px;
      .flexIntro {
        color: ${(props) => props.theme.orange.infoText};
      }
    }
    .horizontal {
      border-bottom: 0.5px solid black;
      margin-top: 100px;
    }
  }
  .mySkills {
    padding-top: 30px;
    img {
      margin-top: 30px;
      width: 100px;
      height: 100px;
    }
  }
`;
export const PortfolioSection = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.theme.beige.background};
`;
export const ContactMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.beige.background};
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h3 {
    margin-left: 10px;
  }
  .email {
    font-size: 20px;
    margin-right: 10px;
  }
`;
