import {
  StyledMenu,
  StyledMenuItems,
  StyledMenuItem,
  StyledIcon,
  StyledLink,
} from "./Submenu.style";

import ThingsToDo from "../../assets/things-to-do.png";
import ToursActivities from "../../assets/tours-activities.png";
import Eating from "../../assets/eating.png";
import Nightlife from "../../assets/nightlife.png";
import Shopping from "../../assets/shopping.png";
import Locals from "../../assets/locals.png";
import Lists from "../../assets/lists.png";
import AskLocals from "../../assets/ask-locals.png";
import { withRouter } from "react-router-dom";

function Navbar({ children, match }) {
  return (
    <StyledMenu>
      <StyledMenuItems>
        <StyledMenuItem to="/">
          <StyledLink to="#">{match.params?.slug?.toUpperCase()}</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={ThingsToDo} />
          <StyledLink>THINGS TO DO</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={ToursActivities} />
          <StyledLink>TOURS &#038; ACTIVITIES</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={Eating} />
          <StyledLink>EATING</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={Nightlife} />
          <StyledLink>NIGHTLIFE</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={Shopping} />
          <StyledLink>SHOPPING</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={Locals} />
          <StyledLink>LOCALS</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={Lists} />
          <StyledLink>LISTS</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem to="/">
          <StyledIcon src={AskLocals} />
          <StyledLink>ASK LOCALS</StyledLink>
        </StyledMenuItem>
      </StyledMenuItems>
    </StyledMenu>
  );
}

export default withRouter(Navbar);