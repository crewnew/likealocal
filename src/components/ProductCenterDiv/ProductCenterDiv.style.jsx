import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;

  h1,
  p {
    margin-bottom: 20px;
    color: #535353;
    font-family: "Proxima Nova";
    line-height: 20px;
    text-align: justify;
  }

  h1 {
    font-family: "Proba Pro";
  }

  @media (max-width: 800px){
    p{
      font-size: 2vw;
    }

    h1 {
    font-size: 3vw;
  }
  }
`;


export const StyledSpecial = styled.div`
  border-left: 4px solid #FE6F28;
  width: 500px;
  padding-left: 20px;
  margin-top: 50px;
  text-align: justify;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
