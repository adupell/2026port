import TextComponent from "../textComponent";
import {
  StyledA,
  StyledFooter,
  StyledLink,
  StyledTextContainer,
  StyledContainer,
} from "./footer.styles";

const Footer = () => {
  const email = () => (window.location.href = "mailto:anddupell@gmail.com");
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
          <StyledA onClick={email}>email</StyledA>
          <StyledLink
            target="_blank"
            to="https://www.linkedin.com/in/amanda-dupell-profile/"
          >
            linkedin
          </StyledLink>
          <StyledLink target="_blank" to="https://github.com/adupell">
            github
          </StyledLink>
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
