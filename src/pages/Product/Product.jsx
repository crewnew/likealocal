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
import { useQuery, gql } from "@apollo/client";

function Product({ history, match }) {
  const PLACE_QUERY = gql`
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

  const PLACES_QUERY_BY_CITY = gql`
  query PlacesQuery {
    places_place(filter: {city_id: {slug: {_contains: "${match.params.city}"}}}) {
      id
      name
      slug
      address
      created
      description
      short_description
      google_price_level
      google_rating
      google_name
      phone_number
      status
      website
      visit_reason
      city_id {
        short_description
      }
    }
  }
`;

  const { loading, error, data } = useQuery(PLACE_QUERY);
  const {
    loading: citiesLoading,
    error: citiesError,
    data: citiesData,
  } = useQuery(PLACES_QUERY_BY_CITY);

  const titleClick = (url) => {
    history.push(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if(data?.places_place.length === 0) {
      history.push('/editors/suggest-city')
    }
  }, [data]);

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
  const string =
    match.params.city.charAt(0).toUpperCase() + match.params.city.slice(1);
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
        <ProductCenterDiv
          visit_reason={data?.places_place[0]?.visit_reason}
          city={match.params.city}
        />
        <GMaps />
      </StyledGrid>
      <Question />
      <Answer />
      <StyledSlider>
        <h2>🔥 Top 4 Tours &#038; Experiences in {string}</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          {citiesData?.places_place?.slice(0, 10).map((place, index) => {
            return (
              <CardTwo
                key={index}
                title={place.name}
                slug={place.slug}
                visit_reason={place.visit_reason}
                {...place}
                titleClick={() => {
                  titleClick(`/${match.params.city}/${place.slug}`);
                  window.scrollTo(0, 0);
                }}
              />
            );
          })}
        </Slider>
      </StyledSlider>
      <StyledDiv>
        <h2>Similar places in {string}</h2>
        <StyledFirstGrid>
          {citiesData?.places_place?.slice(10, 18).map((place, index) => (
            <CardFour
              title={place.name}
              slug={`/${match.params.city}/${place.slug}`}
            />
          ))}
        </StyledFirstGrid>
      </StyledDiv>
      <StyledDiv>
        <h2>Popular Tours &amp; Tips in {string}</h2>
        <StyledSecondGrid>
          <CardFive />
          <CardFive />
          <CardFive />
          <CardFive />
          <CardFive />
          <CardFive />
        </StyledSecondGrid>
      </StyledDiv>
    </div>
  );
}

export default withRouter(Product);

const StyledDiv = styled.div`
  padding: 0 100px;
  margin-top: 100px;

  h2 {
    font-size: 2vw;
    font-family: "Proba Pro";
    color: #404040;
  }
`;

const StyledSlider = styled.div`
  margin-top: 100px;
  width: 90%;
  margin-left: 5%;

  h2 {
    margin-left: 2vw;
    font-family: "Proba Pro";
    color: #404040;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 2vw;
    }
  }
`;

const StyledFirstGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 0;

  @media (max-width: 800px) {
    margin-left: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 100px;
  }
`;

const StyledSecondGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 30px;
  padding: 0;

  @media (max-width: 800px) {
    width: 110%;
    margin-left: -5%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
  }
`;

const StyledGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 20px;
`;
