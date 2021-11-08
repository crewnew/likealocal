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
import { useQuery,gql } from "@apollo/client";

function Product({ match }) {
  const PLACES_QUERY = gql`
  query MyQuery {
    places_place(filter: {slug: {_eq: "${match.params.slug}"}}) {
      name
      short_description
      slug
      visit_reason
      id
      city_id {
        id
        name
        slug
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(PLACES_QUERY);

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
        breakpoint: 950,
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
      <ProductCover
        city={match.params.city}
        name={data?.places_place[0]?.name}
        short_description={data?.places_place[0]?.short_description}
      />
      <StyledGrid>
        <LocalsCard />
        <ProductCenterDiv visit_reason={data?.places_place[0]?.visit_reason} city={match.params.city} />
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
    </div>
  );
}

export default withRouter(Product);

const StyledSlider = styled.div`
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
  grid-gap: 10px;
  padding: 0px 100px;

  @media (max-width: 800px) {
    margin-left: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledSecondGrid = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 0px 100px;

  @media (max-width: 800px) {
    margin-left: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 20px;
`;
