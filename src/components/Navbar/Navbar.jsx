import Input from "../common/Input/Input";
import {
  StyledNavbar,
  StyledLeftSide,
  StyledRightSide,
  StyledLogo,
  StyledLoginLink,
  StyledJoinLink,
} from "./Navbar.style";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLeftSide>
        <StyledLogo>
          <Logo />
        </StyledLogo>

        <Input placeholder="Location">
          <Location />
        </Input>
        <Input placeholder="What are you looking for?">
          <Magnifier />
        </Input>
    
      </StyledLeftSide>
      <StyledRightSide>
        <StyledLoginLink to="/login">LOG IN</StyledLoginLink>
        <StyledJoinLink to="/login">JOIN AS A LOCAL</StyledJoinLink>
      </StyledRightSide>
    </StyledNavbar>
  );
}
