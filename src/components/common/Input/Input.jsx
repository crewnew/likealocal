import { StyledIcon, StyledInput, StyledInputContainer } from "./Input.styled";

export default function Input({ children, placeholder, onChange, onKeyDown, value }) {
  return (
    <StyledInputContainer>
      {children ? <StyledIcon>{children}</StyledIcon> : null}
      <StyledInput placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} />
    </StyledInputContainer>
  );
}
