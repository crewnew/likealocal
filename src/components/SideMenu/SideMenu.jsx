import { StyledMenu, StyledMenuItem, StyledLastMenuItem, StyledPriceRange } from "./SideMenu.style";

export default function SideMenu() {
  return (
    <StyledMenu>
      <StyledMenuItem>All Tours</StyledMenuItem>
      <StyledMenuItem>Walking Tours</StyledMenuItem>
      <StyledMenuItem>Activities &#038; Escape Rooms</StyledMenuItem>
      <StyledMenuItem>Bar, Club &#038; Pub Tours</StyledMenuItem>
      <StyledMenuItem>Food &#038; Cooking Tours</StyledMenuItem>
      <StyledMenuItem>Day Trips</StyledMenuItem>
      <StyledMenuItem>Cultural &#038; History Tours</StyledMenuItem>
      <StyledMenuItem>Bike Tours</StyledMenuItem>
      <StyledMenuItem>Alternative Tours</StyledMenuItem>
      <StyledMenuItem>Running Tours</StyledMenuItem>
      <StyledLastMenuItem>
      <StyledMenuItem>Workshops</StyledMenuItem>
      <StyledPriceRange>
          PRICE RANGE
      </StyledPriceRange>
      </StyledLastMenuItem>
    </StyledMenu>
  );
}
