import styled from "styled-components";

export const StyledCard = styled.div`
  width: 370px;
  height: 400px;
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
  font-size: 1.5vw;
  padding-bottom: 10px;
  font-family: "Proba Pro Medium";
  border-bottom: 1px solid lightgray;
`;

export const StyledBody = styled.div`
  width: 100%;
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

export const StyledHeartIcon = styled.img`
  margin: 2px;
  width: 5%;
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

export const StyledBanner = styled.img`
  position: absolute;
  top: 10%;
  left: 0;
  width: 40%;
  height: 5%;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  object-fit: cover;
`;

export const StyledLocals = styled.div`
  margin: -10% 0 10% 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledAvatarFirstImage = styled.img`
  position: relative;
  z-index: 2;
  border-radius: 50px;
  border: 2px solid white;
  margin-left: -15px;
  width: 20%;
`;

export const StyledAvatarSecondImage = styled.img`
  position: relative;
  z-index: 1;
  border-radius: 50px;
  border: 2px solid white;
  margin-left: -15px;
  width: 20%;
`;

export const StyledAvatarText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 5px;
  left: -20px;
  z-index: 0;
  width: 80%;
  height: 20px;
  font-family: "Proba Pro Medium";
  font-size: 0.8vw;
  background-color: #fa006a;
  color: white;
  padding: 5px 10px 5px 25px;
  border-radius: 15px;
`;
