import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBody = styled.div`
  margin: 100px 0 150px 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e83324;
  font-size: 26px;
  font-weight: bold;
  font-family: "Proxima Nova";
  text-decoration: none;

  @media (max-width: 800px) {
    font-size: 1.5vh;
  }
`;

export const StyledDownArrow = styled.span`
  border: solid #e83324;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);

  @media (max-width: 800px) {
    padding: 1px;
  }
`;

export const StyledUpArrow = styled.span`
  border: solid #e83324;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);

  @media (max-width: 800px) {
    padding: 1px;
  }
`;

export const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 50px;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const StyledItem = styled(Link)`
  color: black;
  font-size: 2vh;
  font-family: "Proba Pro Regular";
  font-weight: 200;
  text-decoration: none;
  margin: 5px;

  @media (max-width: 800px) {
    font-size: 0.5vh;
  }
`;
