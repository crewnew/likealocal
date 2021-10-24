import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  height: 57px;
  background-color: #f5f5f5;
  padding: 0 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledMenuItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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
  font-family: 'Proba Pro';
  font-size: 16px;
  font-weight: 900;
  text-decoration: none;
  color: #404040;
  white-space: nowrap;

  &:first-child {
    color: red;
    text-decoration: underline;
  }
`;
