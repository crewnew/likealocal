import {
  StyledCard,
  StyledImage,
  StyledBody,
  StyledTitle,
  StyledText,
} from "./CardFour.style";

import CardImage from '../../assets/card-four-image.jpeg';

export default function CardFour() {
  return (
    <StyledCard>
      <StyledImage src={CardImage}/>
      <StyledBody>
      <StyledTitle>Azotea Circulo de Bellas Arte</StyledTitle>
      <StyledText>By Brian</StyledText>
      </StyledBody>
    </StyledCard>
  );
}
