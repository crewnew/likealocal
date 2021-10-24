import { StyledIcon, StyledInput, StyledInputContainer } from "./Input.styled";

export default function Input({ children, placeholder, onChange }) {
  return (
    <StyledInputContainer>
      {children ? <StyledIcon>{children}</StyledIcon> : null}
      <StyledInput placeholder={placeholder} onChange={onChange} />
    </StyledInputContainer>
  );
}
