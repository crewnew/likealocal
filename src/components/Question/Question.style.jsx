import styled from "styled-components";

export const StyledImage = styled.img`
@media (max-width: 800px){
    width: 30%;
  }`;

export const StyledTitle = styled.div`
  font-size: 24px;
  color: #535353;
  font-family: "Proba Pro";
  display: flex;
  align-items: center;

  @media (max-width: 800px){
    font-size: 3vw;
  }
`;

export const StyledButton = styled.button`
  background-color: #fa614f;
  color: white;
  font-family: "Proba Pro";
  font-size: 15px;
  border: none;
  padding: 14px 28px;

  @media (max-width: 800px){
    font-size: 2vw;
    padding: 5px 10px;
  }
`;

export const StyledFirst = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
`;

export const StyledSecond = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledThird = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 70px;
`;

export const StyledQuestion = styled.div`
  background-color: #f4f4f4;
  width: 50%;
  position: relative;
  margin-left: 25%;
  margin-top: 100px;
  padding: 30px 0;
`;

export const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  border-radius: 4px;
  padding-left: 10px;
  border: 1px solid #d3d3d3;

  @media (max-width: 800px){
    width: 50%;
    height: 20px;
    font-size: 1vw;
    margin-top: 10px;
  }
`;
