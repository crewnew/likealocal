import {
  StyledCover,
  StyledLeftSide,
  StyledCoverButton,
  StyledCoverQuote,
} from "./CategoryCover.style";
// import CoverImg from "../../assets/category-cover.png";
import styled from "styled-components";
import data from './data';

export default function CategoryCover({ city }) {
  console.log("city", city)
  return (
    <StyledCover>
      <StyledCoverImage url= {data[city].image}/>
      <StyledLeftSide>
        <StyledCoverQuote>
          Alternative bike tour: the best of street art in{" "}
          {city.charAt(0).toUpperCase() + city.slice(1)}
        </StyledCoverQuote>
        <StyledCoverButton>Book from €15/ per person</StyledCoverButton>
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