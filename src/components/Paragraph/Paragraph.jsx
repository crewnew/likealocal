import { StyledParagraph, StyledTitle, StyledBody } from "./Paragraph.style";

export default function Paragraph({ city }) {
  return (
    <StyledParagraph>
      <StyledTitle>
        Tours &#038; Activities in{" "}
        {city.charAt(0).toUpperCase() + city.slice(1)}
      </StyledTitle>
      <StyledBody>
        Browse popular tours and discover 7 sights and 5 museums recommended by
        our locals
      </StyledBody>
    </StyledParagraph>
  );
}
