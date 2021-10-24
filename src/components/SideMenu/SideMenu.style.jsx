import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  width: 187px;
  height: auto;
  margin: 200px;
  display: flex;
  flex-direction: column;
  align-items: left;
  box-shadow: 5px 5px 5px #888888;
`;

export const StyledMenuItem = styled(Link)`
  text-decoration: none;
  background-color: #f7f7f7;
  margin: 1px;
  padding: 10px;
  font-size: 14px;
  font-family: "ProbaPro Medium";
  color: black;
`;

export const StyledLastMenuItem = styled.div`
  background-color: #f7f7f7;
`;

export const StyledPriceRange = styled.div`
  color: #fd6f37;
  font-size: 12px;
  font-family: "Proba Pro";
  margin: 5px 0 0 10px;
`;
