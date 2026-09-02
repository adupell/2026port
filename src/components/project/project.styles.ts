import styled from "styled-components";
import { $white } from "../../assets/colors";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  color: ${$white};
  padding: 32px 0;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 0;
  }

  transition: transform 0.2s ease-in-out;
  &: hover {
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`;

export const StyledTextContainer = styled.div`
  margin-left: 32px;
  flex-direction: column;
  max-width: 500px;

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

export const StyledImg = styled.img`
  display: flex;
  object-fit: cover;
  height: 225px;
  width: 225px;
`;
