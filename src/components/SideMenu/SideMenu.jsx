import {
  StyledMenu,
  StyledMenuItem,
  StyledLastMenuItem,
  StyledPriceRange,
  StyledLabel,
  StyledInput,
  StyledCheckboxes
} from "./SideMenu.style";

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
      <StyledMenuItem>Workshops</StyledMenuItem>
      <StyledLastMenuItem>
        <StyledPriceRange>PRICE RANGE</StyledPriceRange>
        <StyledCheckboxes>
          <StyledLabel>
            <StyledInput type="checkbox" />
            €0 - €49
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="checkbox" />
            €50 - €99
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="checkbox" />
            €100 - €149
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="checkbox" />
            €150 - €199
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="checkbox" />
            €200+
          </StyledLabel>
        </StyledCheckboxes>
      </StyledLastMenuItem>
    </StyledMenu>
  );
}
