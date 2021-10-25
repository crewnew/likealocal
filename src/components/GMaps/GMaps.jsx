import {
  StyledCard,
  StyledImage,
  StyledText,
  StyledIcon,
  StyledLink,
  StyledLocation,
} from "./GMaps.style";

import GMapsImg from "../../assets/gmaps.png";
import LocationImg from "../../assets/location.png";
import TimeImg from "../../assets/time.png";
import LinkImg from "../../assets/link.png";
import PhoneImg from "../../assets/phone.png";

export default function GMaps() {
  return (
    <StyledCard>
      <StyledImage src={GMapsImg}/>
      <StyledLocation>
        <StyledIcon src={LocationImg}/>
        <StyledText>
          Gourmet Experience Gran Via El Corte Inglés Madrid
        </StyledText>
      </StyledLocation>
      <StyledLocation>
        <StyledIcon src={TimeImg}/>
        <StyledText>Mo-Su: 10:00-12:00</StyledText>
      </StyledLocation>
      <StyledLocation>
        <StyledIcon src={PhoneImg}/>
        <StyledText>+34913798000</StyledText>
      </StyledLocation>
      <StyledLocation>
        <StyledIcon src={LinkImg}/>
        <StyledLink>aptc.supermercadoelcorteingle…</StyledLink>
      </StyledLocation>
    </StyledCard>
  );
}
