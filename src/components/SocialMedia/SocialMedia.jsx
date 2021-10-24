import {
  StyledSocialMedia,
  StyledIcon
} from "./SocialMedia.style";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import GmailIcon from "../../assets/gmail.png";
import PlusIcon from "../../assets/plus.png";

export default function SocialMedia() {
  return (
    <StyledSocialMedia>
      <StyledIcon src={FacebookIcon} />
      <StyledIcon src={TwitterIcon} />
      <StyledIcon src={GmailIcon} />
      <StyledIcon src={PlusIcon} />
    </StyledSocialMedia>
  );
}
