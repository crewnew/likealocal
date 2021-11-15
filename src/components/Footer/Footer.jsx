import {
  StyledFooter,
  StyledLogo,
  StyledColumns,
  StyledColumn,
  StyledFooterItem,
  StyledItemHeader,
  StyledSocialMediaItem,
  StyledSocialMediaIcon,
} from "./Footer.style";

import FooterLogo from "../../assets/footer-logo.png";
import FooterFacebook from "../../assets/facebook-footer.png";
import FooterFoursquare from "../../assets/foursquare-footer.png";
import FooterTwitter from "../../assets/twitter-footer.png";
import FooterBlog from "../../assets/blog-footer.png";
import FooterInstagram from "../../assets/instagram-footer.png";
import FooterPinterest from "../../assets/pinterest-footer.png";

export default function Footer() {
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
    window.location.href =
      "https://foursquare.com/p/like-a-local-guide/30830398";
  };
  const pinterestRedirect = () => {
    window.location.href =
      "https://www.pinterest.com/likealocalguide/_created/";
  };
  const blogRedirect = () => {
    window.location.href = "https://www.likealocalguide.com/blog/";
  };
  return (
    <StyledFooter>
      <StyledLogo src={FooterLogo} />
      <StyledColumns>
        <StyledColumn>
          <StyledItemHeader>About</StyledItemHeader>
          <StyledFooterItem>Contact</StyledFooterItem>
          <StyledFooterItem>Meet the team</StyledFooterItem>
          <StyledFooterItem>Terms &#038; Conditions</StyledFooterItem>
          <StyledFooterItem>Privacy Policy</StyledFooterItem>
          <StyledFooterItem>Cancellation Policy</StyledFooterItem>
          <StyledFooterItem>Press Kit</StyledFooterItem>
        </StyledColumn>

        <StyledColumn>
          <StyledItemHeader>Community</StyledItemHeader>
          <StyledFooterItem>Join the community</StyledFooterItem>
          <StyledFooterItem>Jobs</StyledFooterItem>
          <StyledFooterItem>FAQ</StyledFooterItem>
        </StyledColumn>

        <StyledColumn>
          <StyledItemHeader>Partnerships</StyledItemHeader>
          <StyledFooterItem>Host an Experience</StyledFooterItem>
          <StyledFooterItem>Booking Terms</StyledFooterItem>
          <StyledFooterItem>For Bussinesses</StyledFooterItem>
          <StyledFooterItem>Paper Maps</StyledFooterItem>
        </StyledColumn>

        <StyledColumn>
          <StyledSocialMediaItem onClick={blogRedirect}>
            <StyledSocialMediaIcon src={FooterBlog} />
            <StyledFooterItem>Blog</StyledFooterItem>
          </StyledSocialMediaItem>
          <StyledSocialMediaItem onClick={fbRedirect}>
            <StyledSocialMediaIcon src={FooterFacebook} />
            <StyledFooterItem>Facebook</StyledFooterItem>
          </StyledSocialMediaItem>
          <StyledSocialMediaItem onClick={foursquareRedirect}>
            <StyledSocialMediaIcon src={FooterFoursquare} />
            <StyledFooterItem>Foursquare</StyledFooterItem>
          </StyledSocialMediaItem>
          <StyledSocialMediaItem onClick={pinterestRedirect}>
            <StyledSocialMediaIcon src={FooterPinterest} />
            <StyledFooterItem>Pinterest</StyledFooterItem>
          </StyledSocialMediaItem>
          <StyledSocialMediaItem onClick={twitterRedirect}>
            <StyledSocialMediaIcon src={FooterTwitter} />
            <StyledFooterItem>Twitter</StyledFooterItem>
          </StyledSocialMediaItem>
          <StyledSocialMediaItem onClick={instagramRedirect}>
            <StyledSocialMediaIcon src={FooterInstagram} />
            <StyledFooterItem>Instagram</StyledFooterItem>
          </StyledSocialMediaItem>
        </StyledColumn>
      </StyledColumns>
    </StyledFooter>
  );
}
