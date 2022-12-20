import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  FooterContainer,
  HamburgerContainer,
  HamburgerSpan,
  NavTitle,
} from "./navigation.styles";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <HamburgerContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <HamburgerSpan isOpen={isOpen}></HamburgerSpan>
          <HamburgerSpan isOpen={isOpen}></HamburgerSpan>
          <HamburgerSpan isOpen={isOpen}></HamburgerSpan>
        </HamburgerContainer>
        <NavLinks isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/activities">ACTIVITIES</NavLink>
          <NavLink to="/newsLetter">NEWSLETTER</NavLink>
          <NavLink to="/cookie-info">COOKIES</NavLink>
          <NavLink to="/volunteer">VOLUNTEER</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/card">Card</NavLink>
        </NavLinks>

        <NavTitle isOpen={isOpen}>Troop #6789</NavTitle>
      </NavigationContainer>

      <Outlet />
      <FooterContainer>
        <NavLink>yguthrie.dev@gmail.com</NavLink>
      </FooterContainer>
    </Fragment>
  );
};

export default Navigation;
