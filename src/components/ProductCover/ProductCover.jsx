import {
  StyledCover,
  StyledCenter,
  StyledCoverImage,
  StyledCoverSubquote,
  StyledCoverQuote,
  StyledSaveButton,
  StyledLoveButton,
  StyledCoverButtons,
} from "./ProductCover.style";
import CoverImg from "../../assets/product-cover.jpeg";

export default function ProductCover({ city }) {
  return (
    <StyledCover>
      <StyledCoverImage src={CoverImg} />
      <StyledCenter>
        <StyledCoverQuote>
          {city.charAt(0).toUpperCase() + city.slice(1)} from above
        </StyledCoverQuote>
        <StyledCoverSubquote>
          Azotea Círculo de Bellas Artes 🤍 33
        </StyledCoverSubquote>
      </StyledCenter>
      <StyledCoverButtons>
        <StyledSaveButton>Save to list</StyledSaveButton>
        <StyledLoveButton>Love it</StyledLoveButton>
      </StyledCoverButtons>
    </StyledCover>
  );
}
