import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.div`
`;

export const StyledLogo = styled.img`
  margin-top: 30px;
  margin-left: 50px;
  width: 5%;
  height: auto;

  @media (max-width: 768px) {
    width: 10%;
  }
`;

export const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  line-height: 30px;

 @media (min-width: 950px) {
   margin-left: 100px;
  }

  @media (max-width: 768px) {
   margin-left: 30px;
  }

  @media (max-width: 500px) {
    :last-of-type{
      flex-direction: row;
    }
  }
`;

export const StyledItemHeader = styled(Link)`
  color: #E83324;
  font-weight: bold;
  font-family: "Proxima Nova";
  text-decoration: none;
  font-size: 2vh;

  @media (max-width: 768px) {
   font-size: 1vh;
  }
`;

export const StyledFooterItem = styled(Link)`
  color: black;
  font-family: "Proxima Nova";
  text-decoration: none;

  @media (max-width: 768px) {
   font-size: 1vh;
  }
`;

export const StyledSocialMediaItem= styled(Link)`
  color: black;
  font-family: "Proxima Nova";
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
      margin-right: 15px;
    }
`;

export const StyledSocialMediaIcon = styled.img`
  width: 20px;
  margin-right:5px;

  @media (max-width: 768px) {
   width: 10px;
   margin-right: 0;
  }
`;


