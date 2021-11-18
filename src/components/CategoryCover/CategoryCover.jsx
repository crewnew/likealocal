import { useState, useEffect } from "react";
import {
  StyledCover,
  StyledLeftSide,
  StyledCoverButton,
  StyledCoverQuote,
} from "./CategoryCover.style";
import styled from "styled-components";
import data from './data';

export default function CategoryCover({ city, description }) {
  const [citiesData, setCitiesData] = useState(data)

  useEffect(() => {
    setCitiesData(data);
  }, [data])

  console.log('city', city)
  console.log('data', data)
  console.log('citiesData', citiesData)
  console.log('data[city]', data[city])
  console.log('data[city].image', data[city].image)
  return (
    <StyledCover>
      <StyledCoverImage url={require(`../../assets/${citiesData[city]?.image}`).default}/> 
      <StyledLeftSide>
        <StyledCoverQuote>
          {description || `Explore ${city.charAt(0).toUpperCase() + city.slice(1)} with a local guide`}
        </StyledCoverQuote>
        <StyledCoverButton>Explore</StyledCoverButton>
      </StyledLeftSide>
    </StyledCover>
  );
}


const StyledCoverImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${({url}) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(50%);


  @media (max-width: 800px){
    height: 40vw;
  }
`;
