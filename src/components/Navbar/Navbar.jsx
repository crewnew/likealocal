import { connect } from "react-redux";
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

function Navbar({ change, reset }) {
  const handleChange = (e) => {
    change(e.target.value);
  };

  return (
    <StyledNavbar>
      <StyledLeftSide>
        <StyledLogo>
          <Logo />
        </StyledLogo>

        <Input placeholder="Location">
          <Location />
        </Input>
        <Input placeholder="What are you looking for?" onChange={handleChange}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    change: (value) => dispatch({ type: "CHANGE", payload: value }),
    reset: () => dispatch({ type: "RESET" }),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
