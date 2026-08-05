import { StyledGif, StyledLink, StyledLogo, StyledNav } from "./header.styles";
import LogoSVG from "../../assets/logo.svg";
import FlowerGif from "../../assets/flower.gif";

const Header = () => {
  return (
    <StyledNav>
      <StyledLogo src={LogoSVG} />
      <StyledLink first to={"/"}>
        home [work]
      </StyledLink>
      <StyledLink to={"/about"}>about</StyledLink>
      <StyledLink
        target={"_blank"}
        to={"https://www.dropbox.com/s/qht5ne8wdr529lj/RESUME.pdf?dl=0"}
      >
        resume
      </StyledLink>
      <StyledGif src={FlowerGif} />
    </StyledNav>
  );
};

export default Header;
