import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import Submenu from "../../components/Submenu/Submenu";
import CategoryCover from "../../components/CategoryCover/CategoryCover";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Paragraph from "../../components/Paragraph/Paragraph";
import Footer from "../../components/Footer/Footer";
import CardOne from "../../components/CardOne/CardOne";
import CardTwo from "../../components/CardTwo/CardTwo";
import CardThree from "../../components/CardThree/CardThree";
import SideMenu from "../../components/SideMenu/SideMenu";

function Category({ history, match }) {
  const PLACES_QUERY = gql`
    query PlacesQuery {
      places_place(filter: {city_id: {slug: {_contains: "${match.params.slug}"}}}) {
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
      }
    }
  `;

  const { loading, error, data } = useQuery(PLACES_QUERY);

  const titleClick = (url) => {
    history.push(url);
  };

  console.log("data", data);
  console.log("error", error);
  console.log("loading", loading);

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
      <CategoryCover city={match.params.slug}/>
      <Submenu />
      <Paragraph city={match.params.slug} />

      <StyledSlider>
        <h2>Original tours from Withlocals</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          {data?.places_place?.slice(0, 10).map((place, index) => {
            return (
              <CardOne
                title={place.name}
                slug={place.slug}
                visit_reason={place.visit_reason}
                {...place}
                titleClick={() =>
                  titleClick(`${match.params.slug}/${place.slug}`)
                }
              />
            );
          })}
        </Slider>
      </StyledSlider>

      <StyledSlider>
        <h2>Recommended tours in {match.params.slug}</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          {data?.places_place?.slice(11, 20).map((place, index) => {
            return (
              <CardTwo
                title={place.name}
                slug={place.slug}
                visit_reason={place.visit_reason}
                {...place}
                titleClick={() =>
                  titleClick(`${match.params.slug}/${place.slug}`)
                }
              />
            );
          })}
        </Slider>
      </StyledSlider>

      <StyledCategories>
        <StyledSideMenu>
          <SideMenu></SideMenu>
        </StyledSideMenu>
        <StyledCards>
          {data?.places_place?.slice(0, 50).map((place, index) => {
            if(!place.visit_reason && !place.short_description) return null;
            console.log('place.name', place.name)
            console.log('place.visit_reason', place.visit_reason)
            console.log('place.short_description', place.short_description)
            return (
              <div style={{ marginBottom: '20px'}}>
                <CardThree
                  title={place.name}
                  slug={place.slug}
                  reason={place.visit_reason ? place.visit_reason : place.short_description}
                  address={place.address}
                  phone_number={place.phone_number}
                  {...place}
                  titleClick={() =>
                    titleClick(`${match.params.slug}/${place.slug}`)
                  }
                />
              </div>
            );
          })}
        </StyledCards>
      </StyledCategories>
      <Footer />
    </div>
  );
}

export default withRouter(Category);

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
