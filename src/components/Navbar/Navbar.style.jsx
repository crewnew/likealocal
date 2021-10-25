import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
  height: 65px;
  background-color: #e93223;
  padding: 0 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
    font-size: 12px;
    display: flex;
    align-items: center;
`;

export const StyledJoinLink = styled(Link)`
    border: 2px solid white;
    padding: 0 10px;
    height: 40px;
    color: #FEC94C;
    font-weight: 700;
    font-size: 12px;
    text-decoration: none;
    display: flex;
    align-items: center
`;
