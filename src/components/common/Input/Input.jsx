import { StyledIcon, StyledInput, StyledInputContainer } from "./Input.styled";

export default function Input({ children, placeholder }) {
  return (
    <StyledInputContainer>
      {children ? <StyledIcon>{children}</StyledIcon> : null}
      <StyledInput placeholder={placeholder} />
    </StyledInputContainer>
  );
}
