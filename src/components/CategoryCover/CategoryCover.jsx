import {
  StyledCover,
  StyledLeftSide,
  StyledCoverImage,
  StyledCoverButton,
  StyledCoverQuote,
} from "./CategoryCover.style";
import CoverImg from "../../assets/category-cover.png";

export default function CategoryCover() {
  return (
    <StyledCover>
      <StyledCoverImage src={CoverImg} />
      <StyledLeftSide>
      <StyledCoverQuote>
        Alternative bike tour: the best of street art in Madrid
      </StyledCoverQuote>
      <StyledCoverButton>Book from €15/ per person</StyledCoverButton>
      </StyledLeftSide>
    </StyledCover>
  );
}
