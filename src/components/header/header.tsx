import { StyledGif, StyledLink, StyledLogo, StyledNav } from "./header.styles";
import LogoSVG from "../../assets/logo.svg";
import HandGif from "../../assets/hand.gif";
import FlowerGif from "../../assets/flower.gif";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <StyledNav>
      <StyledLogo src={LogoSVG} />
      <StyledLink first active={location.pathname === "/"} to={"/"}>
        {location.pathname === "/" ? "[ home/work ]" : "home/work"}
      </StyledLink>
      <StyledLink active={location.pathname === "/about"} to={"/about"}>
        {location.pathname === "/about" ? "[ about ]" : "about"}
      </StyledLink>
      <StyledLink
        target={"_blank"}
        to={"https://www.dropbox.com/s/qht5ne8wdr529lj/RESUME.pdf?dl=0"}
      >
        resume
      </StyledLink>{" "}
      {location.pathname === "/about" ? (
        <StyledGif src={HandGif} />
      ) : (
        <StyledGif src={FlowerGif} />
      )}
    </StyledNav>
  );
};

export default Header;
