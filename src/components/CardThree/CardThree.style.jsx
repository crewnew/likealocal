import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled.div`
  width: 920px;
  height: 230px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 15px #888888;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 35%;
  height: 100%;
  object-fit: cover;
`;

export const StyledTitle = styled.div`
  width: 90%;
  height: auto;
  font-size: 24px;
  padding-bottom: 10px;
  font-family: "Proba Pro Medium";
`;

export const StyledRightSide = styled.div`
  width: 65%;
  display: flex;
`;

export const StyledBody = styled.div`
  width: 70%;
  height: auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #97979730;
  margin: 20px 0;
`;

export const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledHeartIcon = styled.img`
  margin: 2px;
`;

export const StyledReviews = styled.div`
  font-family: "Proxima Nova";
  font-size: 12px;
  color: gray;
  display: flex;
  align-items: center;
  margin-left: 4px;
`;

export const StyledText = styled.div`
  font-family: "Proxima Nova";
  font-size: 12px;
  color: gray;
  text-align: center;
`;

export const StyledPrice = styled.div`
  font-family: "Proba Pro";
  font-size: 28px;
  color: black;
  text-align: center;
`;

export const StyledBanner = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 80px;
  height: 24px;
  padding: 4px;
  border-radius: 2px;
  font-size: 12px;
  font-family: "Proba Pro";
  color: white;
  background-color: #e93324;
  text-align: center;
`;

export const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const StyledTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledBottom = styled.div`
  margin-top: 80px;
`;

export const StyledBooking = styled.div`
  font-family: "Proba Pro";
  font-size: 10px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StyledHeaderItem = styled(Link)`
  margin-left: 5px;
  font-size: 12px;
  font-family: "Proxima Nova";
  color: #979797;
  text-decoration: none;
`;

export const StyledButton = styled.button`
color: white;
background-color: #e93324;
width: 135px;
height: 35px;
font-size: 20px;
font-family: 'Proba Pro';
outline: none;
border:none;
cursor: pointer;
margin-top: 10px;
`;

export const StyledParagraph = styled.div`
  margin: 15px 0;
  font-size: 14px;
  font-family: "Proxima Nova";
  color: #515151;
  line-height: 15px;
`;
