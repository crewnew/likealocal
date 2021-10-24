import styled from "styled-components";
import Slider from "react-slick";

import Navbar from "../../components/Navbar/Navbar";
import Submenu from "../../components/Submenu/Submenu";
import CategoryCover from "../../components/CategoryCover/CategoryCover";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Paragraph from "../../components/Paragraph/Paragraph";
import Footer from "../../components/Footer/Footer";
import CardOne from "../../components/CardOne/CardOne";
import CardTwo from "../../components/CardTwo/CardTwo";
import CardThree from "../../components/CardThree/CardThree";
import CardFour from "../../components/CardFour/CardFour";
import CardFive from "../../components/CardFive/CardFive";
import SideMenu from "../../components/SideMenu/SideMenu";

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
      <CategoryCover />
      <Submenu />
      <Paragraph />

      <StyledSlider>
        <h2>Original tours from Withlocals</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          <CardOne />
          <CardOne />
          <CardOne />
          <CardOne />
          <CardOne />
        </Slider>
      </StyledSlider>

      <StyledSlider>
        <h2>Recommended tours in Madrid</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          <CardTwo />
          <CardTwo />
          <CardTwo />
          <CardTwo />
          <CardTwo />
        </Slider>
      </StyledSlider>

      <StyledCategories>
        <StyledSideMenu>
          <SideMenu></SideMenu>
        </StyledSideMenu>
        <StyledCards>
          <CardThree />
          <CardThree />
          <CardThree />
          <CardThree />
          <CardThree />
        </StyledCards>
      </StyledCategories>
      <Footer />
    </div>
  );
};

const StyledSlider = styled.div`
  height: 470px;
  margin-top: 40px;
  width: 90%;
  margin-left: 5%;

  h2 {
    margin-left: 20px;
    font-family: "Proba Pro";
  }
`;

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  padding: 0 90px;
`;

const StyledSideMenu = styled.div`
  width: 35%;
`;

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;
