import React from "react";
import styled, { keyframes } from "styled-components";

import LogoSVG from "../icons/logo";

const Spinner: React.FC = () => (
  <LoadingWrapper>
    <Logo />
  </LoadingWrapper>
);

const LoadingWrapper = styled.div`
  background: #fff;
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoAnimation = keyframes`
  0% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1.2);
  }

  100% {
    transform: scale(1, 1);
  }
`;

const Logo = styled(LogoSVG)`
  animation: ${logoAnimation} 1s infinite;
  position: absolute;
  height: 80px;
  width: 80px;

  path {
    fill: var(--primary-color);
    stroke: var(--primary-color);
  }
`;

export default Spinner;
