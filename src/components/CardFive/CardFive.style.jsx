import styled from "styled-components";

export const StyledCard = styled.div`
  width: 180px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px #888888;
  position: relative;

  @media (max-width: 800px){
    width: 100%;
    height: 80%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const StyledTitle = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  font-family: "Proba Pro";

  @media (max-width: 800px){
    font-size: 2vw;
  }
`;


