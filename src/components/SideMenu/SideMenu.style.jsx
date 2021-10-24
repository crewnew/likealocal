import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  width: 230px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  box-shadow: 5px 5px 5px #888888;
`;

export const StyledMenuItem = styled(Link)`
  text-decoration: none;
  background-color: #f7f7f7;
  margin: 1px;
  padding: 20px;
  font-size: 14px;
  font-family: "ProbaPro Medium";
  color: black;

  &:hover,:active{
    background: white;
    border-left: 3px solid red;
  }
`;

export const StyledLastMenuItem = styled.div`
  background-color: #f7f7f7;
`;

export const StyledPriceRange = styled.div`
  color: #fd6f37;
  font-size: 12px;
  font-family: "Proba Pro";
  margin: 30px 0 20px 20px;
`;

export const StyledLabel = styled.label`
  color: black;
  font-size: 16px;
  font-family: "ProbaPro Medium";
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  margin: 20px 10px 0 20px;
  border: none;
`;

export const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
`;