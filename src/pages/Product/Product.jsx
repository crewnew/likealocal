import styled from "styled-components";
import Slider from "react-slick";

import Submenu from "../../components/Submenu/Submenu";
import ProductCover from "../../components/ProductCover/ProductCover";
import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import CardTwo from "../../components/CardTwo/CardTwo";
import CardFour from "../../components/CardFour/CardFour";
import CardFive from "../../components/CardFive/CardFive";
import LocalsCard from "../../components/LocalsCard/LocalsCard";

export default () => {
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
      <Submenu />
      <ProductCover />
      <LocalsCard />
      <StyledSlider>
        <h2>🔥 Top 4 Tours &#038; Experiences in Madrid</h2>
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
};

const StyledSlider = styled.div`
  height: 470px;
  margin-top: 200px;
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 0px 100px;
`;

const StyledSecondGrid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0px 100px;
`;
