import {
  StyledCard,
  StyledFirstCard,
  StyledSecondCard,
  StyledButton,
  StyledFirst,
  StyledSecond,
  StyledThird,
  StyledName,
  StyledNumber,
  StyledLocalName,
  StyledImage,
  StyledLocalButton,
  StyledText
} from "./LocalsCard.style";

import LocalsImg from "../../assets/locals-avatar.jpg";

export default function LocalsCard() {
  return (
    <StyledCard>
      <StyledFirstCard>
          <StyledImage  src={LocalsImg}/>
          <StyledLocalName>Brian</StyledLocalName>
          <StyledLocalButton>Local Guru</StyledLocalButton>
          <StyledText>Traveloooney Blog</StyledText>
      </StyledFirstCard>

      <StyledSecondCard>
        <StyledFirst>
          <StyledNumber>65</StyledNumber>
          <StyledName>TIPS</StyledName>
        </StyledFirst>
        <StyledSecond>
          <StyledNumber>8</StyledNumber>
          <StyledName>LISTS</StyledName>
        </StyledSecond>
        <StyledThird>
          <StyledNumber>382</StyledNumber>
          <StyledName>LIKES</StyledName>
        </StyledThird>
      </StyledSecondCard>

      <StyledButton>Ask Brian about Madrid</StyledButton>
    </StyledCard>
  );
}
