import { withRouter } from "react-router-dom";
import styled from "styled-components";
import data from "./data";
import ExploreMore from "../../components/ExploreMore/ExploreMore";
import { useState } from "react";

function Home({ history }) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = (slug) => {
    history.push(`/${slug}`);
  };
  return (
    <StyledHome>
      {data.map((city) => {
        return (
          <StyledCity url={require(`../../assets/${city?.image}`).default} onClick={() => handleClick(city.slug)}>
            <StyledContent>
              <h1>{city.title}</h1>
              <p>{city.description}</p>
            </StyledContent>
          </StyledCity>
        );
      })}
      <ExploreMore clicked={() => setShowMore(!showMore)} showMore={showMore} />
    </StyledHome>
  );
}

export default withRouter(Home);

const StyledHome = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCity = styled.div`
  cursor: pointer;
  position: relative;
  height: 280px;
  width: 370px;
  margin: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const StyledContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
  z-index: 9999;

  h1,
  p {
    color: white;
  }
`;
