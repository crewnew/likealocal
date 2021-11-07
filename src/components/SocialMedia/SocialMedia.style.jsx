import styled from "styled-components";

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  z-index: 1;
`;

export const StyledIcon = styled.img`
  width: 40px;
  height: auto;

  &:hover{
      cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 20px;
  }
`;
