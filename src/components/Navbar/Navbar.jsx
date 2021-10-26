import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
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

const countries = [
  "prague",
  "berlin",
  "paris",
  "riga",
  "tallin",
  "vilnius",
  "munich",
  "vienna",
  "newyork"
];

function Navbar({ locationChange, change, reset, history, match, props }) {
  const pathname = window.location.pathname;
  const [location, setLocation] = useState("");

  useEffect(() => {
    const country = pathname.split("/")[1];
    if (location !== country && country != "search" && country != "editors") {
      setLocation(country);
      locationChange(country);
    }
  }, [window.location.pathname]);

  const handleChange = (e) => {
    change(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      history.push(`/search`);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    locationChange(e.target.value);
  };

  const handleLocationKeyDown = (event) => {
    if (event.key === "Enter") {
      if (countries.includes(location.toLowerCase().split(" ").join(""))) {
        history.push(`/${location.toLowerCase().split(" ").join("")}`);
      } else {
        history.push(`/editors/suggest-city`);
      }
    }
  };

  return (
    <StyledNavbar>
      <StyledLeftSide>
        <StyledLogo onClick={() => history.push("/")}>
          <Logo />
        </StyledLogo>

        <Input
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
          onKeyDown={handleLocationKeyDown}
        >
          <Location />
        </Input>
        <Input
          placeholder="What are you looking for?"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        >
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
    locationChange: (value) => dispatch({ type: "LOCATION", payload: value }),
    change: (value) => dispatch({ type: "CHANGE", payload: value }),
    reset: () => dispatch({ type: "RESET" }),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(Navbar));
