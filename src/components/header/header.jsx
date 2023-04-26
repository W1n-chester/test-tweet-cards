// import { NavLink } from "react-router-dom";
import { StyledHeader, Nav, StyledNavLink, LogoNavLink } from "./header.styled";
export const Header = () => {
    return (
      <StyledHeader>
        <LogoNavLink to="/">
          logo
        </LogoNavLink>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/tweets">Tweets</StyledNavLink>
        </Nav>
      </StyledHeader>
    );
};
