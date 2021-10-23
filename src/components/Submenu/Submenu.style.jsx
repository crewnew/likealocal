import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg";

export const StyledMenu = styled.div`
  height: 45px;
  background-color: #f5f5f5;
  padding: 0 110px;
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
  width: 15%;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  &:first-of-type {
    border-right: 1px solid black;
    height: 20px;
  }
`;

export const StyledIcon = styled.img`
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: black;

  &:first-child{
    color: red;
    text-decoration: underline;
  }
`;
