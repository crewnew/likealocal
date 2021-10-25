import { withRouter } from 'react-router-dom';
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

function Navbar({ change, reset, history }) {
  const handleChange = (e) => {
    change(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      history.push('/search')
    }
  }

  return (
    <StyledNavbar>
      <StyledLeftSide>
        <StyledLogo onClick={() => history.push('/')}>
          <Logo />
        </StyledLogo>

        <Input placeholder="Location">
          <Location />
        </Input>
        <Input placeholder="What are you looking for?" onChange={handleChange} onKeyDown={handleKeyDown}>
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
export default withRouter(connect(null, mapDispatchToProps)(Navbar));
