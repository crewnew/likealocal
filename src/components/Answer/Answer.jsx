import {
  StyledAnswer,
  StyledLine,
  StyledHead,
  StyledContent,
  AvatarCircle,
  StyledComment,
  StyledReply
} from "./Answer.style";
import AvatarImg from "../../assets/answer-avatar.png";


export default function Answer() {
  return (
    <StyledAnswer>
      <StyledHead>
        <h2>1&nbsp;Comment&nbsp;</h2>
        <StyledLine />
      </StyledHead>

      <StyledComment>
        <StyledContent>
          <AvatarCircle>A</AvatarCircle>
          <div>
            <h5>Love the place!</h5>
            <div style={{ marginTop: '20px' }}>
              <span style={{ color: 'red', fontSize: '1vw'}}>Alejandaro</span>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span style={{ color: '#ababab', fontSize: '1vw' }}>Traveler</span>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span style={{ color: '#ababab', fontSize: '1vw'}}>OCTOBER 8, 2021</span>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span style={{ color: '#ababab', fontSize: '1vw' }}>Likes</span>
            </div>
          </div>
        <StyledReply>
          <img src={AvatarImg} />
          <input placeholder="Write a reply ..." />
        </StyledReply>
        </StyledContent>
      </StyledComment>
      <StyledLine />
    </StyledAnswer>
  );
}

