import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  z-index: 1;
`;

export const StyledOtherSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const StyledIcon = styled.img`
  width: 40px;
  height: auto;
  background: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 20px;
  }
`;
