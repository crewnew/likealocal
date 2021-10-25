import {
  StyledCover,
  StyledLeftSide,
  StyledCoverImage,
  StyledCoverButton,
  StyledCoverQuote,
} from "./CategoryCover.style";
import CoverImg from "../../assets/category-cover.png";

export default function CategoryCover({ city }) {
  return (
    <StyledCover>
      <StyledCoverImage src={CoverImg} />
      <StyledLeftSide>
        <StyledCoverQuote>
          Alternative bike tour: the best of street art in{" "}
          {city.charAt(0).toUpperCase() + city.slice(1)}
        </StyledCoverQuote>
        <StyledCoverButton>Book from €15/ per person</StyledCoverButton>
      </StyledLeftSide>
    </StyledCover>
  );
}
