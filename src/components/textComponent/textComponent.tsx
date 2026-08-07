import {
  StyledH1,
  StyledH2,
  StyledBody,
  StyledTitle,
} from "./textComponent.styles";

interface TextComponentProps {
  text: string;
  type: string;
  projectPage?: boolean;
}

const TextComponent = ({ text, type, projectPage }: TextComponentProps) => {
  let content = <></>;

  switch (type) {
    case "header":
      content = <StyledH1 projectPage={projectPage}>{text}</StyledH1>;
      break;
    case "subheader":
      content = <StyledH2 projectPage={projectPage}>{text}</StyledH2>;
      break;
    case "title":
      content = <StyledTitle projectPage={projectPage}>{text}</StyledTitle>;
      break;
    default:
      content = <StyledBody projectPage={projectPage}>{text}</StyledBody>;
      break;
  }

  return <>{content}</>;
};

export default TextComponent;
