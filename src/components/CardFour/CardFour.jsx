import { useHistory } from 'react-router-dom';

import {
  StyledCard,
  StyledImage,
  StyledBody,
  StyledTitle,
  StyledText,
} from "./CardFour.style";

import CardImage from "../../assets/card-four-image.jpeg";

export default function CardFour({title, slug}) {
  const history = useHistory();
  return (
    <StyledCard>
      <StyledImage src={CardImage} />
      <StyledBody>
        <StyledTitle onClick={() => {
            history.push(slug);
            window.scrollTo(0, 0);
          }}>
          {title
            ? title
            : "Alternative bike tour: the best of street art in Madrid"}
        </StyledTitle>
        <StyledText>By Brian</StyledText>
      </StyledBody>
    </StyledCard>
  );
}
