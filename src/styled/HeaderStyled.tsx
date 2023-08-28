import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 150px;
  background-color: #eee6c4;
  .hidden {
    animation: hide 0.1s linear forwards;
  }
  .shown {
    animation: show 0.1s linear forwards;
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
  @keyframes show {
    from {
      visibility: hidden;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  &:hover {
    color: white;
    transition: all 0.3s linear;
  }
`;
