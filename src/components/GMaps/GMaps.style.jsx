import styled from "styled-components";

export const StyledImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.div`
  font-size: 12px;

  @media (max-width: 800px){
    font-size: 3vw;
  }
`;

export const StyledIcon = styled.img`
  width: 20px;
`;

export const StyledLink = styled.div`
  font-size: 14px;
  color: #ff8952;
`;

export const StyledLocation = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  margin-bottom: 10px;
`;
