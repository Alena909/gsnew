import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.div`
  width: 100%;
  background-color: green;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 768px) {
    display: ${(props) => !props.isOpen && "none"};
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  :hover {
    color: black;
  }
`;

export const NavTitle = styled.h2`
  @media only screen and (max-width: 768px) {
    display: ${(props) => props.isOpen && "none"};
  }
`;

export const HamburgerContainer = styled.div`
  width: 30px;
  height: 20px;
  position: absolute;
  top: 25px;
  left: 25px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerSpan = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  background-color: white;

  :nth-child(1) {
    ${(props) =>
      props.isOpen
        ? "top: 11px; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg);-o-transform: rotate(45deg);  transform: rotate(45deg);"
        : "top: 0px;"};
  }
  :nth-child(2) {
    ${(props) => (props.isOpen ? "opacity: 0; left: -60px;" : "  top: 10px;")};
  }
  :nth-child(3) {
    ${(props) =>
      props.isOpen
        ? "top: 11px; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg);-o-transform: rotate(-45deg);  transform: rotate(-45deg);"
        : " top: 20px;"};
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 10vh;

  background-color: green;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 0;
`;
