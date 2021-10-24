import {
    StyledCard,
    StyledImage,
    StyledBody,
    StyledTitle,
    StyledText,
  } from "./CardFive.style";
  
  import CardImage from '../../assets/card-five-image.jpeg';
  
  export default function CardFive() {
    return (
      <StyledCard>
        <StyledImage src={CardImage}/>
        <StyledTitle>11 TOURS</StyledTitle>
      </StyledCard>
    );
  }
  