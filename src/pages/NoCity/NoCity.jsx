import { withRouter } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../assets/notfound.jpeg";

function NoCity({ history }) {
  return (
    <div>
      <StyledCover src={NotFound} />
      <StyledBox>
        <StyledParagraph>
          We don't have the city you searched for yet!
        </StyledParagraph>
      </StyledBox>
    </div>
  );
}

export default withRouter(NoCity);

const StyledCover = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const StyledBox = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 350px;
  background-color: #eeecef;
  opacity: 0.8;
`;

const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  font-family: "Proba Pro";
  font-size: 2vw;
  color: #404040;
`;
