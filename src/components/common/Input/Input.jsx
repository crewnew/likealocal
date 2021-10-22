import styled from "styled-components";

export default function Input({ children, placeholder }) {
  return (
    <StyledInputContainer>
      {children ? <StyledIcon>{children}</StyledIcon> : null}
      <StyledInput placeholder={placeholder} />
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  height: 40px;
  width: 300px;
  background-color: white;
  margin: 0 5px;
  display: flex;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: none;
`;

const StyledIcon = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
