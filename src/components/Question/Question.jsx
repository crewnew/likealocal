import {
  StyledButton,
  StyledFirst,
  StyledSecond,
  StyledThird,
  StyledImage,
  StyledTitle,
  StyledQuestion,
  StyledInput
} from "./Question.style";
import AvatarImg from "../../assets/avatar-red.png";

export default function Question() {
    return(
  <StyledQuestion>
    <StyledFirst>
      <StyledImage src={AvatarImg} />
      <StyledTitle>Have a comment or question?</StyledTitle>
    </StyledFirst>
    <StyledSecond>
      <StyledInput placeholder="Share opinion, add photos or ask questions..." />
    </StyledSecond>
    <StyledThird>
      <StyledButton>Post</StyledButton>
    </StyledThird>
  </StyledQuestion>
    )
}
