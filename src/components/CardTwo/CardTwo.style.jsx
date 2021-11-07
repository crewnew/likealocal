import styled from "styled-components";

export const StyledCard = styled.div`
  width: 370px;
  height: 380px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 15px #888888;
  position: relative;

  @media (max-width: 800px) {
    width: 50%;
    height: auto;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledTitle = styled.div`
  cursor: pointer;
  width: 90%;
  height: auto;
  padding: 10px 0;
  font-size: 1.5vw;
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


  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const StyledBodyLeft = styled.div`
  margin: 20px 0 0 20px;

  @media (max-width: 800px) {
    margin: 5px 0 0 100px;
  }
`;

export const StyledBodyRight = styled.div`
  margin: 15px 20px 0 0;

  @media (max-width: 800px) {
    margin: 5px 100px 0 0;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const StyledStarIcon = styled.img`
  margin: 2px;

  @media (max-width: 800px) {
    width: 2%;
  }
`;

export const StyledReviews = styled.div`
  font-family: "Proxima Nova";
  font-size: 1vw;
  color: gray;
`;

export const StyledText = styled.div`
  font-family: "Proxima Nova";
  font-size: 1vw;
  color: gray;
`;

export const StyledPrice = styled.div`
  font-family: "Proba Pro";
  font-size: 1.5vw;
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
  font-family: "Proba Pro";
  color: white;
  background-color: #ffa822;
  text-align: center;

  @media (max-width: 800px) {
    width: 20%;
    height: auto;
    padding: 2px;
    font-size: 1vw;
  }
`;
