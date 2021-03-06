import styled from "styled-components";

export const StyledCover = styled.div`
  position: relative;
`;

export const StyledCoverImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  filter: brightness(50%);

  @media (max-width: 800px){
    height: 40vh;
  }
`;

export const StyledCoverButtons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  right: 100px;
`;

export const StyledSaveButton = styled.div`
  background-color: #e93324;
  width: 130px;
  font-size: 20px;
  font-family: "ProbaPro Medium";
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  padding: 20px 15px;

  &:hover {
    background-color: red;
  }

  @media (max-width: 800px){
    font-size: 2vw;
    padding: 10px 10px;
    width: auto;
  }
`;

export const StyledLoveButton = styled.div`
  background-color: #cf0e0d;
  width: 130px;
  font-size: 20px;
  font-family: "ProbaPro Medium";
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  padding: 20px 30px;

  &:hover {
    background-color: red;
  }

  @media (max-width: 800px){
    font-size: 2vw;
    padding: 10px 10px;
    width: auto;
  }
`;

export const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledCoverQuote = styled.div`
  width: 100%;
  font-family: "Proba Pro";
  font-size: 48px;
  font-weight: 600;
  color: white;
  text-align: center;

  @media (max-width: 800px){
    font-size: 2vw;
  }
`;

export const StyledCoverSubquote = styled.div`
  width: 100%;
  font-family: "Proba Pro";
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-align: center;s
`;
