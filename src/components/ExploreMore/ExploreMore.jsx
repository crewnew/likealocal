import {
  StyledBody,
  StyledLink,
  StyledColumns,
  StyledColumn,
  StyledItem,
  StyledUpArrow,
  StyledDownArrow,
} from "./ExploreMore.style";
import { withRouter } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

function ExploreMore(props) {
  const PLACES_QUERY = gql`
    query MyQuery {
      places_city {
        name
        slug
      }
    }
  `;
  const { loading, error, data } = useQuery(PLACES_QUERY);

  const handleClick = (slug) => {
    props.history.push(`/${slug}`);
  };
  let sortedCities = [];
  if (data?.places_city.length) {
    sortedCities = [...data?.places_city];
    sortedCities.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log("sortedCities", sortedCities);
  }
  //   const cities = data?.places_city.sort();
  return (
    <StyledBody>
      <StyledLink to="/" onClick={props.clicked}>
        Explore more popular cities &nbsp;{" "}
        {props.showMore ? <StyledUpArrow /> : <StyledDownArrow />}
      </StyledLink>
      {props.showMore ? (
        <StyledColumns>
          <StyledColumn>
            {sortedCities?.slice(0, 20).map((city) => {
              return (
                <StyledItem onClick={() => handleClick(city.slug)}>
                  {city.name}
                </StyledItem>
              );
            })}
          </StyledColumn>
          <StyledColumn>
            {sortedCities?.slice(20, 40).map((city) => {
              return (
                <StyledItem onClick={() => handleClick(city.slug)}>
                  {city.name}
                </StyledItem>
              );
            })}
          </StyledColumn>
          <StyledColumn>
            {sortedCities?.slice(40, 60).map((city) => {
              return (
                <StyledItem onClick={() => handleClick(city.slug)}>
                  {city.name}
                </StyledItem>
              );
            })}
          </StyledColumn>
          <StyledColumn>
            {sortedCities?.slice(60, 80).map((city) => {
              return (
                <StyledItem onClick={() => handleClick(city.slug)}>
                  {city.name}
                </StyledItem>
              );
            })}
          </StyledColumn>
          <StyledColumn>
            {sortedCities?.slice(80).map((city) => {
              return (
                <StyledItem onClick={() => handleClick(city.slug)}>
                  {city.name}
                </StyledItem>
              );
            })}
          </StyledColumn>
        </StyledColumns>
      ) : null}
    </StyledBody>
  );
}

export default withRouter(ExploreMore);
