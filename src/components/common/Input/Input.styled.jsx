import styled from "styled-components";

export const StyledInputContainer = styled.div`
  height: 50%;
  width: auto;
  background-color: white;
  margin: 0 5px;
  display: flex;

  @media (max-width: 900px) {
   display: none;
  }
`;

export const StyledInput = styled.input`
  width: auto;
  height: 100%;
  padding: 0 20px;
  border: none;
  font-size: 1vw;

  &:focus{
    outline: none;
  }

  &::placeholder{
    font-size: 0.8vw;
  }
`;

export const StyledIcon = styled.div`
  width: 12%;
  height: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
