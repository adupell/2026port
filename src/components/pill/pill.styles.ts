import styled from "styled-components";
import { $orange, $white } from "../../assets/colors";

interface PillProps {
  type: string;
}

export const StyledPill = styled.div<PillProps>`
  width: max-content;
  margin: 8px;
  padding: 8px 16px;
  border: solid 1px
    ${({ type }) =>
      type === "profile" ? `${$orange}` : `${$white}; color: ${$white}`};
  border-radius: 6px;

  &:hover {
    background-color: ${({ type }) =>
      type === "profile" ? `${$orange}33` : `${$white}33`};
    cursor: default;
  }
`;
