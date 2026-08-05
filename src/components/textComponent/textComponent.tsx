import { StyledH1, StyledH2, StyledBody } from "./textComponent.styles";

interface TextComponentProps {
  text?: string;
  type?: string;
}

const TextComponent = ({ text, type }: TextComponentProps) => {
  let content = <></>;

  switch (type) {
    case "header":
      content = <StyledH1>{text}</StyledH1>;
      break;
    case "subheader":
      content = <StyledH2>{text}</StyledH2>;
      break;
    case "title":
      content = <StyledH2>{text}</StyledH2>;
      break;
    default:
      content = <StyledBody>{text}</StyledBody>;
      break;
  }

  return <>{content}</>;
};

export default TextComponent;
