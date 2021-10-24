import styled from "styled-components";

export const StyledCard = styled.div`
  width: 370px;
  height: auto;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 15px #888888;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 370px;
  height: auto;
`;

export const StyledTitle = styled.div`
  width: 90%;
  height: auto;
  padding: 10px 0;
  font-size: 20px;
  font-family: "Proba Pro Medium";
  border-bottom: 1px solid lightgray;
`;

export const StyledBody = styled.div`
  width: 370px;
  height: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledBodyLeft = styled.div`
  margin: 20px 0 0 20px;
`;

export const StyledBodyRight = styled.div`
  margin: 15px 20px 0 0;
`;

export const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StyledStarIcon = styled.img`
  margin: 2px;
`;

export const StyledReviews = styled.div`
  font-family: "Proxima Nova";
  font-size: 12px;
  color: gray;
`;

export const StyledText = styled.div`
  font-family: "Proxima Nova";
  font-size: 12px;
  color: gray;
`;

export const StyledPrice = styled.div`
  font-family: "Proba Pro";
  font-size: 20px;
  color: black;
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
  font-family: 'Proba Pro';
  color: white;
  background-color: #FFA822;
  text-align: center;
`;
