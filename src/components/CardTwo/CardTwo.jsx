import {
    StyledCard,
    StyledTitle,
    StyledBody,
    StyledImage,
    StyledBodyLeft,
    StyledBodyRight,
    StyledRating,
    StyledReviews, 
    StyledStarIcon,
    StyledPrice,
    StyledText,
    StyledBanner
  } from "./CardTwo.style";
  
  import CardImage from "../../assets/card-two-image.png";
  import StarIcon from '../../assets/star.png';
  
  export default function CardOne({ title, visit_reason, titleClick }) {
    return (
      <StyledCard>
        <StyledBanner>FEATURED</StyledBanner>
        <StyledImage src={CardImage} />
        <StyledTitle onClick={titleClick}>
          {title
            ? title
            : "Alternative bike tour: the best of street art in Madrid"}
        </StyledTitle>
        <StyledBody>
          <StyledBodyLeft>
              <StyledRating>
                  <StyledStarIcon src={StarIcon}/>
                  <StyledStarIcon src={StarIcon}/>
                  <StyledStarIcon src={StarIcon}/>
                  <StyledStarIcon src={StarIcon}/>
                  <StyledStarIcon src={StarIcon}/>
              </StyledRating>
              <StyledReviews>
                  230 Reviews
              </StyledReviews>
          </StyledBodyLeft>
          <StyledBodyRight>
              <StyledPrice>15 EUR</StyledPrice>
              <StyledText>per person</StyledText>
          </StyledBodyRight>
        </StyledBody>
      </StyledCard>
    );
  }
  