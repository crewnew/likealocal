import {
  StyledCard,
  StyledTitle,
  StyledBody,
  StyledImage,
  StyledHeader,
  StyledRight,
  StyledTop,
  StyledBottom,
  StyledBooking,
  StyledRating,
  StyledHeartIcon,
  StyledPrice,
  StyledText,
  StyledBanner,
  StyledButton,
  StyledParagraph,
  StyledReviews,
  StyledHeaderItem,
  StyledRightSide
} from "./CardThree.style";

import CardImage from "../../assets/card-one-image.png";
import StarIcon from "../../assets/star.png";
import HeartIcon from "../../assets/heart-icon-red.png";
import { StyledStarIcon } from "../CardTwo/CardTwo.style";

export default function CardOne({title, author, description}) {
  return (
    <StyledCard>
      <StyledBanner>FEATURED</StyledBanner>
      <StyledImage src={CardImage} />
      <StyledRightSide>
        <StyledBody>
          <StyledHeader>
            <StyledHeaderItem>TOUR &#183;</StyledHeaderItem>
            <StyledHeaderItem>ALTERNATIVE &#183;</StyledHeaderItem>
            <StyledHeaderItem>4HRS</StyledHeaderItem>
            <StyledHeaderItem>{author && author}</StyledHeaderItem>
          </StyledHeader>
          <StyledTitle>
            {title ? title : "Alternative bike tour: the best of street art in Madrid"}
          </StyledTitle>
          <StyledRating>
            <StyledStarIcon src={StarIcon} />
            <StyledStarIcon src={StarIcon} />
            <StyledStarIcon src={StarIcon} />
            <StyledStarIcon src={StarIcon} />
            <StyledStarIcon src={StarIcon} />
            <StyledReviews>(230)</StyledReviews>
          </StyledRating>
          <StyledParagraph>
            {description ? description : `Madrid's #1 street art bike tour is now available. Discover with a
            local graffiti artist the most trendy areas in the neighborhoods of
            Malasaña, Lavapiés and Embajadores...`}
          </StyledParagraph>
        </StyledBody>

        <StyledRight>
          <StyledTop>
            <StyledHeartIcon src={HeartIcon} />
            <StyledBooking>BOOKED BY 219 PEOPLE!</StyledBooking>
          </StyledTop>
          <StyledBottom>
            <StyledPrice>15 EUR</StyledPrice>
            <StyledText>per person</StyledText>
            <StyledButton>Book now</StyledButton>
          </StyledBottom>
        </StyledRight>
      </StyledRightSide>
    </StyledCard>
  );
}
