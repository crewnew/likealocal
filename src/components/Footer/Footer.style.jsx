import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.div`
  position: relative;
  top: 200px;
  padding: 0 150px;
`;

export const StyledLogo = styled.img`
  position: relative;
  top: 100px;
  width: 100px;
  height: auto;
`;

export const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  line-height: 30px;

  &:first-of-type {
    margin-left: 250px;
  }
`;

export const StyledItemHeader = styled(Link)`
  color: #ff0000;
  font-weight: bold;
  font-family: "Proxima Nova";
  text-decoration: none;
`;

export const StyledFooterItem = styled(Link)`
  color: black;
  font-family: "Proxima Nova";
  text-decoration: none;
`;

export const StyledSocialMediaItem= styled(Link)`
  color: black;
  font-family: "Proxima Nova";
  text-decoration: none;
`;

export const StyledSocialMediaIcon = styled.img`
  width: 20px;
  margin-right:5px;
  margin-top: 20px;
`;


