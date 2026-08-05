import {
  StyledContainer,
  StyledImg,
  StyledTextContainer,
} from "./project.styles";
import TextComponent from "../textComponent";
import { Link } from "react-router-dom";

interface ProjectProps {
  img: string;
  title: string;
  description: string;
  skills: string;
  to: string;
  target?: string;
}

const Project = ({
  img,
  title,
  description,
  skills,
  to,
  target,
}: ProjectProps) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to} target={target}>
      <StyledContainer>
        <StyledImg src={img} />
        <StyledTextContainer>
          <TextComponent type="title" text={title} />
          <TextComponent type="body" text={description} />
          <TextComponent type="body" text={skills} />
        </StyledTextContainer>
      </StyledContainer>
    </Link>
  );
};

export default Project;
