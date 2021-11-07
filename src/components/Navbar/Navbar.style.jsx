import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
  width: 100%;
  height: 65px;
  background-color: #e93223;
  padding: 0 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: space-around;
  }
`;

export const StyledLeftSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledRightSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled.div`
  margin-right: 50px;
  cursor: pointer;
`;

export const StyledLoginLink = styled(Link)`
  height: 40px;
  padding: 0 20px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 2vh;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1vh;
  }
`;

export const StyledJoinLink = styled(Link)`
  border: 2px solid white;
  padding: 0 10px;
  height: 40px;
  color: #fec94c;
  font-weight: 700;
  font-size: 2vh;
  text-decoration: none;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1vh;
  }
`;
