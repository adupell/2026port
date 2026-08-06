import styled from "styled-components";
import { Link } from "react-router-dom";
import { $black, $orange } from "../../assets/colors";

interface LinkProps {
  first?: boolean;
  active?: boolean;
}

export const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 20%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-right: dotted ${$orange};

  @media screen and (max-width: 1000px) {
  }
`;

export const StyledLink = styled(Link)<LinkProps>`
  color: ${$orange};
  text-decoration: none;
  padding: 16px 0;
  width: 100%;
  border-bottom: dotted ${$orange};
  ${({ first }) => (first ? `border-top: dotted ${$orange};` : "")}
  ${({ active }) => (active ? `font-weight: 700;` : "")}

  &:hover {
    font-weight: 700;
    color: ${$black};
    background-color: ${$orange};
    cursor: pointer;
  }
`;

export const StyledLogo = styled.img`
  display: flex;
  width: 50%;
  padding: 64px 0;
`;

export const StyledGif = styled.img`
  display: flex;
  width: 80%;
`;
