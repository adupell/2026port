import styled from "styled-components";
import { $white } from "../../assets/colors";

interface TextComponentProps {
  projectPage?: boolean;
}

export const StyledH1 = styled.h1<TextComponentProps>`
  ${({ projectPage }) => (projectPage ? `color: ${$white};` : ``)}
`;

export const StyledH2 = styled.h2<TextComponentProps>`
  ${({ projectPage }) =>
    projectPage ? `color: ${$white};` : `font-weight: normal;`}
  font-size: 24px;
`;

export const StyledTitle = styled.p<TextComponentProps>`
  ${({ projectPage }) => (projectPage ? `color: ${$white};` : ``)}
  font-size: 20px;
  font-weight: 700;
`;

export const StyledBody = styled.p<TextComponentProps>`
  ${({ projectPage }) => (projectPage ? `color: ${$white};` : ``)}
  font-size: 14px;
`;
