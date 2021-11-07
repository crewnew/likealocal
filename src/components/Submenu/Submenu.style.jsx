import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
   display: none;
  }
`;

export const StyledMenuItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMenuItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  &:first-of-type {
    border-right: 1px solid #40404030;
    height: 12px;
  }
`;

export const StyledIcon = styled.img`
  width: 20%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const StyledLink = styled(Link)`
  font-family: "Proba Pro";
  font-size: 1vw;
  font-weight: 900;
  text-decoration: none;
  color: #404040;
  white-space: nowrap;

  &:first-child {
    color: red;
    text-decoration: underline;
  }
`;
