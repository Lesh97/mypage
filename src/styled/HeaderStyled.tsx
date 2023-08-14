import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 150px;
  background-color: #eee6c4;
`;

export const HeaderCategory = styled.div`
  padding-top: 55px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CategoryFont = styled.a`
  font-size: 30px;
  text-decoration: none;
  color: ${(props) => props.theme.orange.navText};
  font-weight: 800;
  -webkit-text-stroke: 1px navy;
`;
