import {
  StyledSocialMedia,
  StyledIcon,
  StyledOtherSocialMedia,
} from "./SocialMedia.style";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import GmailIcon from "../../assets/gmail.png";
import PlusIcon from "../../assets/plus.png";
import MinusIcon from "../../assets/minus.png";
import BlogIcon from "../../assets/blog.png";
import PinterestIcon from "../../assets/pinterest.png";
import FoursquareIcon from "../../assets/foursquare.png";
import InstagramIcon from "../../assets/instagram.png";
import { useState } from "react";

export default function SocialMedia() {
  const [showIcons, setShowIcons] = useState(false);

  const fbRedirect = () => {
    window.location.href = "https://www.facebook.com/likealocalguide";
  };
  const twitterRedirect = () => {
    window.location.href = "https://twitter.com/likealocal";
  };
  const instagramRedirect = () => {
    window.location.href = "https://www.instagram.com/likealocalguide/";
  };
  const foursquareRedirect = () => {
    window.location.href = "https://foursquare.com/p/like-a-local-guide/30830398";
  };
  const pinterestRedirect = () => {
    window.location.href = "https://www.pinterest.com/likealocalguide/_created/";
  };
  const blogRedirect = () => {
    window.location.href = "https://www.likealocalguide.com/blog/";
  };
  const gmailRedirect = () => {
    window.location.href = "mailto:support@likealocalguide.com";
  };
  const showMore = () => {
    setShowIcons(!showIcons);
  };

  return (
    <StyledSocialMedia>
      <StyledIcon src={FacebookIcon} onClick={fbRedirect} />
      <StyledIcon src={TwitterIcon} onClick={twitterRedirect} />
      <StyledIcon src={GmailIcon} onClick={gmailRedirect} />
      {showIcons ? (
        <StyledOtherSocialMedia>
          <StyledIcon src={InstagramIcon} onClick={instagramRedirect} />
          <StyledIcon src={BlogIcon} onClick={blogRedirect} />
          <StyledIcon src={PinterestIcon} onClick={pinterestRedirect} />
          <StyledIcon src={FoursquareIcon} onClick={foursquareRedirect} />
        </StyledOtherSocialMedia>
      ) : null}
      <StyledIcon src={showIcons?MinusIcon:PlusIcon} onClick={showMore} />
    </StyledSocialMedia>
  );
}
