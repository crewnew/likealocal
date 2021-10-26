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

export default function ProductCover({ city, name, short_description }) {
  return (
    <StyledCover>
      <StyledCoverImage src={CoverImg} />
      <StyledCenter>
        <StyledCoverQuote>
          {name
            ? name
            : city.charAt(0).toUpperCase() + city.slice(1) + " from above"}
        </StyledCoverQuote>
        <StyledCoverSubquote>
          {short_description
            ? short_description
            : "Azotea Círculo de Bellas Artes 🤍 33"}
        </StyledCoverSubquote>
      </StyledCenter>
      <StyledCoverButtons>
        <StyledSaveButton>Save to list</StyledSaveButton>
        <StyledLoveButton>Love it</StyledLoveButton>
      </StyledCoverButtons>
    </StyledCover>
  );
}
