import styled from "styled-components";

export const StyledCard = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px #888888;
  position: relative;

  @media (max-width: 800px){
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledTitle = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  font-family: "Proba Pro";

  @media (max-width: 800px){
    font-size: 2vw;
  }
`;

export const StyledBody = styled.div`
  width: 80%;
  height: auto;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.div`
  font-family: "Proxima Nova";
  font-size: 14px;
  color: #e93324;
`;
