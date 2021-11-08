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

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledImage = styled.img`
  width: 35%;
  height: 100%;
  object-fit: cover;
`;

export const StyledTitle = styled.div`
  cursor: pointer;
  width: 90%;
  height: auto;
  font-size: 1.5vw;
  padding-bottom: 10px;
  font-family: "Proba Pro Medium";

  @media (max-width: 800px) {
    font-size: 1vw;
    padding-bottom: 0;
    white-space: wrap;
  }
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
  justify-content: center;
  border-right: 1px solid #97979730;
  margin: 20px 0;
  text-align: justify;

  @media (max-width: 800px) {
    width: 150%;
    margin: 0;
    padding: 0 5px;
  }
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
  font-size: 1vw;
  color: gray;
  display: flex;
  align-items: center;
  margin-left: 4px;

  @media (max-width: 800px) {
    font-size: 0.5vw;
  }
`;

export const StyledText = styled.div`
  font-family: "Proxima Nova";
  font-size: 12px;
  color: gray;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1vw;
  }
`;

export const StyledPrice = styled.div`
  font-family: "Proba Pro";
  font-size: 28px;
  color: black;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1vw;
  }
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

  @media (max-width: 800px) {
    width: 10%;
    top: 10%;
    font-size: 0.5vw;
    height: auto;
    padding: 2px;
  }
`;

export const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  @media (max-width: 800px) {
   margin: 0 5px;
  }
`;

// export const StyledTop = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

export const StyledBottom = styled.div`
`;

export const StyledBooking = styled.div`
  font-family: "Proba Pro";
  font-size: 10px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
   
  @media (max-width: 800px) {
  margin: 0;
  }
`;

export const StyledHeaderItem = styled(Link)`
  margin-left: 5px;
  font-size: 0.8vw;
  font-family: "Proxima Nova";
  color: #979797;
  text-decoration: none;

  @media (max-width: 800px) {
    font-size: 0.5vw;
    margin-left: 3px;
  }
`;

export const StyledButton = styled.button`
  color: white;
  background-color: #e93324;
  width: 135px;
  height: 35px;
  font-size: 1.5vw;
  font-family: "Proba Pro";
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

export const StyledParagraph = styled.div`
  margin: 15px 0;
  font-size: 1vw;
  font-family: "Proxima Nova";
  color: #515151;
  line-height: 15px;
  white-space: wrap;

  @media (max-width: 800px) {
    font-size: 0.7vw;
    line-height: 5px;
    margin: 0;
  }
`;
