import {
  StyledCard,
  StyledTitle,
  StyledBody,
  StyledImage,
  StyledBodyLeft,
  StyledBodyRight,
  StyledRating,
  StyledReviews,
  StyledHeartIcon,
  StyledPrice,
  StyledText,
  StyledBanner,
  StyledLocals,
  StyledAvatarFirstImage,
  StyledAvatarSecondImage,
  StyledAvatarText,
} from "./CardOne.style";

import CardImage from "../../assets/card-one-image.png";
import HeartIcon from "../../assets/heart-icon.png";
import Banner from "../../assets/with-locals.png";
import Avatar from "../../assets/avatar.png";

export default function CardOne({ title, visit_reason, titleClick }) {
  return (
    <StyledCard>
      <StyledBanner src={Banner} />
      <StyledImage src={CardImage} />
      <StyledLocals>
        <StyledAvatarFirstImage src={Avatar} />
        <StyledAvatarSecondImage src={Avatar} />
        <StyledAvatarText>Choose your favorite local!</StyledAvatarText>
      </StyledLocals>
      <StyledTitle onClick={titleClick}>
        {title
          ? title
          : "Alternative bike tour: the best of street art in Madrid"}
      </StyledTitle>
      <StyledBody>
        <StyledBodyLeft>
          <StyledRating>
            <StyledHeartIcon src={HeartIcon} />
            <StyledHeartIcon src={HeartIcon} />
            <StyledHeartIcon src={HeartIcon} />
            <StyledHeartIcon src={HeartIcon} />
            <StyledHeartIcon src={HeartIcon} />
          </StyledRating>
          <StyledReviews>230 Reviews</StyledReviews>
        </StyledBodyLeft>
        <StyledBodyRight>
          <StyledPrice>15 EUR</StyledPrice>
          <StyledText>per person</StyledText>
        </StyledBodyRight>
      </StyledBody>
    </StyledCard>
  );
}
