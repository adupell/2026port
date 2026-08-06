import { useState } from "react";
import TextComponent from "../textComponent";
import {
  StyledA,
  StyledFooter,
  StyledLink,
  StyledTextContainer,
  StyledContainer,
} from "./footer.styles";

const Footer = () => {
  const text = "anddupell@gmail.com";
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 4000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <StyledA onClick={scrollToTop}>back to top</StyledA>
      <StyledContainer>
        <StyledTextContainer>
          <TextComponent text="contact" type="title" />
          <StyledLink
            target="_blank"
            to="https://www.linkedin.com/in/amanda-dupell-profile/"
          >
            linkedin
          </StyledLink>
          <StyledLink target="_blank" to="https://github.com/adupell">
            github
          </StyledLink>
          <StyledA onClick={handleCopy}>
            {isCopied ? "⋆˚꩜｡ copied email! use it to say hello ｡꩜˚⋆" : "email"}
          </StyledA>
        </StyledTextContainer>
        <StyledTextContainer>
          <TextComponent text="projects" type="title" />
          <StyledLink to="/made-to-play">made to play</StyledLink>
          <StyledLink to="/letterboxd">letterboxd</StyledLink>
          <StyledLink to="https://amandadupell.surge.sh/" target="_blank">
            personal portfolio
          </StyledLink>
        </StyledTextContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
