import styled from "styled-components";

export const StyledCover = styled.div`
  position: relative;
`;

export const StyledCoverImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 15%;
`;

export const StyledCoverQuote = styled.div`
  width: 45%;
  font-family: 'Proba Pro';
  font-size: 48px;
  font-weight: 600;
  color: white;
`;

export const StyledCoverButton = styled.button`
width: 20%;
background-color: #EA3424;
color: white;
font-family: 'Proba Pro';
font-size: 16px;
padding: 10px 5px;
border: none;
outline: none;
margin-top: 20px;

&:hover{
  cursor: pointer;
  background-color: red;
}
`;
