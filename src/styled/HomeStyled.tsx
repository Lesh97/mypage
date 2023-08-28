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
  height: 100%;
  background-color: ${(props) => props.theme.beige.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  .IntroWrapper {
    padding-top: 40px;
    width: 100%;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    .fixedIntro {
      padding-left: 50px;
      font-weight: 600;
      .flexIntro {
        color: ${(props) => props.theme.orange.infoText};
        font-weight: 800;
        @keyframes blink-effect {
          50% {
            opacity: 0;
          }
        }
        span {
          animation: blink-effect 0.8s step-end infinite;
          position: relative;
          bottom: 8px;
          right: 10px;
        }
      }
    }
    .horizontal {
      border-bottom: 1px solid black;
      margin-top: 30px;
      width: 100%;
    }
  }
  .mySkills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;

    .skillbar {
      display: flex;
      align-items: center;
      width: 100%;
      .skillTitle {
        font-size: 20px;
        font-weight: 800;
        margin-right: 20px;
        width: 140px;
      }
    }
    .frontskills {
      display: flex;
      text-align: center;
      width: 100%;
      background-color: ${(props) => props.theme.beige.skillBackground};
      border-radius: 15px;
      box-shadow: 1px 1px 0.5px 0px;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
    .backskills {
      display: flex;
      text-align: center;
      width: 29%;
      background-color: ${(props) => props.theme.beige.skillBackground};
      border-radius: 15px;
      box-shadow: 1px 1px 0.5px 0px;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
    .framework {
      display: flex;
      text-align: center;
      width: 43%;
      background-color: ${(props) => props.theme.beige.skillBackground};
      border-radius: 15px;
      box-shadow: 1px 1px 0.5px 0px;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
    .deployments {
      display: flex;
      text-align: center;
      width: 29%;
      background-color: ${(props) => props.theme.beige.skillBackground};
      border-radius: 15px;
      box-shadow: 1px 1px 0.5px 0px;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
    .communications {
      display: flex;
      text-align: center;
      width: 17%;
      background-color: ${(props) => props.theme.beige.skillBackground};
      border-radius: 15px;
      box-shadow: 1px 1px 0.5px 0px;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
    img {
      margin-top: 30px;
      width: 150px;
      height: 150px;
    }
  }
`;
export const PortfolioSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.beige.background};
`;
export const ContactMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
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
