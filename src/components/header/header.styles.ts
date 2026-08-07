import styled from "styled-components";
import { Link } from "react-router-dom";
import { $black, $darkOrange, $orange } from "../../assets/colors";

interface LinkProps {
  first?: boolean;
  active?: boolean;
}

export const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 25%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-right: dotted ${$orange};

  @media screen and (max-width: 1000px) {
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    text-align: center;
    align-items: center;
    border-right: 0;
    border-bottom: dotted ${$orange};
    z-index: 999;
    background-color: ${$black};
  }
`;

export const StyledLink = styled(Link)<LinkProps>`
  color: ${$orange};
  text-decoration: none;
  padding: 16px 0;
  width: 100%;
  border-bottom: dotted ${$orange};
  ${({ first }) => (first ? `border-top: dotted ${$orange};` : "")}
  ${({ active }) =>
    active ? `font-weight: 700; background-color: ${$darkOrange};` : ""}

  &:hover {
    font-weight: 700;
    color: ${$black};
    background-color: ${$orange};
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    border: none;
  }
`;

export const StyledLogo = styled.img`
  display: flex;
  width: 45%;
  padding: 64px 0;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const StyledGif = styled.img`
  display: flex;
  width: 80%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
