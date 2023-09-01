import styled from "styled-components";
import { Link } from "react-router-dom";

export const OutletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const OutletTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-top: 20px;
`;
export const OutletLink = styled(Link)`
  margin-top: 20px;
  font-size: 20px;
`;
export const OutletSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  font-size: 25px;
`;
export const OutletSum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  font-size: 30px;
  padding: 0px 30px;
`;
export const OutletThink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  font-size: 30px;
  padding: 0px 30px;
`;
