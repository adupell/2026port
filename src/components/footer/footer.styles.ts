import styled from "styled-components";
import { Link } from "react-router-dom";
import { $orange } from "../../assets/colors";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: dotted ${$orange};
  padding: 100px 120px;

  @media screen and (max-width: 1200px) {
    padding: 80px 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 48px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow:;
`;

export const StyledLink = styled(Link)`
  color: ${$orange};
  text-decoration: none;
  padding: 8px 0;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

export const StyledA = styled.a`
  color: ${$orange};
  text-decoration: none;
  padding: 8px 0;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;
