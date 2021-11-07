import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  width: 20vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  box-shadow: 5px 5px 5px #888888;
  /* white-space: nowrap; */
  margin-left: -20px;

  @media (max-width: 900px) {
   width: 70%;
   margin-left: -30px;
  }
`;

export const StyledMenuItem = styled(Link)`
  text-decoration: none;
  background-color: #f7f7f7;
  margin: 1px;
  padding: 10px 20px 10px 10px;
  font-size: 1vw;
  font-family: "ProbaPro Medium";
  color: black;

  &:hover,:active{
    background: white;
    border-left: 3px solid red;
  }

  @media (max-width: 900px) {
    font-size: 0.8vw;
  }
`;

export const StyledLastMenuItem = styled.div`
  background-color: #f7f7f7;

  @media (max-width: 900px) {
    font-size: 0.8vw;
  }
`;

export const StyledPriceRange = styled.div`
  color: #fd6f37;
  font-size: 12px;
  font-family: "Proba Pro";
  margin: 5px 0 20px 10px;

  @media (max-width: 900px) {
    font-size: 0.8vw;
  }
`;

export const StyledLabel = styled.label`
  color: black;
  font-size: 16px;
  font-family: "ProbaPro Medium";
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    font-size: 0.8vw;
  }
`;

export const StyledInput = styled.input`
  margin: 0 5px 0 10px;
  border: none;
  width: 1em;

  @media (max-width: 900px) {
    width: 0.5em;
  }
`;

export const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
`;