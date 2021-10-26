import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

import ProductCover from "../../components/ProductCover/ProductCover";
import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import CardTwo from "../../components/CardTwo/CardTwo";
import CardFour from "../../components/CardFour/CardFour";
import CardFive from "../../components/CardFive/CardFive";
import LocalsCard from "../../components/LocalsCard/LocalsCard";
import GMaps from "../../components/GMaps/GMaps";
import ProductCenterDiv from "../../components/ProductCenterDiv/ProductCenterDiv";
import Question from "../../components/Question/Question";
import Answer from "../../components/Answer/Answer";
import { useEffect } from "react";

function Product({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div>
      <SocialMedia />
      <ProductCover city={match.params.city} />
      <StyledGrid>
        <LocalsCard />
        <ProductCenterDiv />
        <GMaps />
      </StyledGrid>
      <Question />
      <Answer />
      <StyledSlider>
        <h2>🔥 Top 4 Tours &#038; Experiences in {match.params.city}</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          <CardTwo />
          <CardTwo />
          <CardTwo />
          <CardTwo />
          <CardTwo />
        </Slider>
      </StyledSlider>
      <StyledFirstGrid>
        <CardFour />
        <CardFour />
        <CardFour />
        <CardFour />
        <CardFour />
        <CardFour />
        <CardFour />
        <CardFour />
      </StyledFirstGrid>
      <StyledSecondGrid>
        <CardFive />
        <CardFive />
        <CardFive />
        <CardFive />
        <CardFive />
        <CardFive />
      </StyledSecondGrid>

      <Footer />
    </div>
  );
}

export default withRouter(Product);

const StyledSlider = styled.div`
  height: 470px;
  margin-top: 100px;
  width: 90%;
  margin-left: 5%;

  h2 {
    margin-left: 20px;
    font-family: "Proba Pro";
  }
`;

const StyledFirstGrid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 100px;
`;

const StyledSecondGrid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 0px 100px;
`;

const StyledGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 20px;
`;
