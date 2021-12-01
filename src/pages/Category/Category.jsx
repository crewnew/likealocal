import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import { useQuery, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import CategoryCover from "../../components/CategoryCover/CategoryCover";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Paragraph from "../../components/Paragraph/Paragraph";
import Footer from "../../components/Footer/Footer";
import CardOne from "../../components/CardOne/CardOne";
import CardTwo from "../../components/CardTwo/CardTwo";
import CardThree from "../../components/CardThree/CardThree";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useEffect } from "react";

function Category({ history, match }) {
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PLACES_QUERY = gql`
    query PlacesQuery($offset: Int, $limit: Int) {
      places_place(offset: $offset, limit: $limit, filter: {city_id: {slug: {_contains: "${match.params.slug}"}}}) {
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

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          places_place: {
            merge(existing = [], incoming) {
              console.log("existing", existing);
              console.log("incoming", incoming);
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  });

  const { loading, error, data, fetchMore } = useQuery(PLACES_QUERY, {
    variables: {
      offset: 0,
      limit: 10,
    }
  });

  useEffect(() => {
    if (data?.places_place.length === 0) {
      history.push("/editors/suggest-city");
    }
  }, [data]);

  const titleClick = (url) => {
    history.push(url);
  };

  const loadMore = () => {
    console.log(
      "offset: data?.places_place?.length",
      data?.places_place?.length
    );
    fetchMore({
      variables: {
        offset: data?.places_place?.length,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newData = {places_place: prevResult.places_place.concat(fetchMoreResult.places_place)}
        if(fetchMoreResult.places_place.length < 10) {
          setLoadMoreVisible(false)
        }
        return newData
      }
    });
  };

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
  const string =
    match.params.slug.charAt(0).toUpperCase() + match.params.slug.slice(1);
  return (
    <div>
      <SocialMedia />
      <CategoryCover
        city={match.params.slug}
        description={data?.places_place[0]?.city_id?.short_description}
      />
      {/* <Submenu /> */}
      <Paragraph city={match.params.slug} />

      <StyledSlider>
        <h2>Original tours from Withlocals</h2>
        <Slider {...settings} style={{ width: "100%" }}>
          {data?.places_place?.slice(0, 10).map((place, index) => {
            return (
              <CardOne
                key={index}
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
        <h2>Recommended tours in {string}</h2>
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

      <StyledDiv>
        <h2>All tours in {string}</h2>
        <StyledCategories>
          <StyledSideMenu>
            <SideMenu></SideMenu>
          </StyledSideMenu>
          <StyledCards>
            {data?.places_place?.map((place, index) => {
              // if (!place.visit_reason && !place.short_description) return null;
              return (
                <div key={place.name} style={{ marginBottom: "20px" }}>
                  <CardThree
                    title={place.name}
                    slug={place.slug}
                    reason={
                      place.visit_reason
                        ? place.visit_reason
                        : place.short_description
                    }
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
            {loadMoreVisible ? (
              <StyledButton onClick={loadMore}>Load More</StyledButton>
            ): null}
          </StyledCards>
        </StyledCategories>
      </StyledDiv>
    </div>
  );
}

export default withRouter(Category);

const StyledDiv = styled.div`
  padding: 0 100px;
  margin-top: 100px;

  h2 {
    font-size: 2.5vw;
    font-family: "Proba Pro";
  }
`;

const StyledSlider = styled.div`
  margin-top: 40px;
  width: 90%;
  margin-left: 5%;

  h2 {
    margin-left: 20px;
    font-size: 2.5vw;
    font-family: "Proba Pro";
  }
`;

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const StyledSideMenu = styled.div`
  width: 35%;
`;

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
`;

const StyledButton = styled.button`
  background: #ea3424;
  color: white;
  width: 200px;
  border: none;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 20px;
  font-family: "Proba Pro";
  margin-top: 30px;

  &:hover {
    background: red;
  }
`;
