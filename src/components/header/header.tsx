import { StyledGif, StyledLink, StyledLogo, StyledNav } from "./header.styles";
import LogoSVG from "../../assets/logo.svg";
import HandGif from "../../assets/hand.gif";
import FlowerGif from "../../assets/flower.gif";
import SnailGif from "../../assets/snail.gif";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const renderGif = (type: string) => {
    switch (type) {
      case "hand":
        return <StyledGif src={HandGif} />;
      case "flower":
        return <StyledGif src={FlowerGif} />;
      case "snail":
        return <StyledGif src={SnailGif} />;
      default:
        return null;
    }
  };

  return (
    <StyledNav>
      <StyledLogo src={LogoSVG} />
      <StyledLink first active={location.pathname === "/"} to={"/"}>
        {location.pathname === "/" ? "[ home/work ]" : "home/work"}
      </StyledLink>
      <StyledLink active={location.pathname === "/for-fun"} to={"/for-fun"}>
        {location.pathname === "/for-fun" ? "[ for fun ]" : "for fun"}
      </StyledLink>
      <StyledLink active={location.pathname === "/about"} to={"/about"}>
        {location.pathname === "/about" ? "[ about ]" : "about"}
      </StyledLink>
      <StyledLink
        target={"_blank"}
        to={"https://www.dropbox.com/s/qht5ne8wdr529lj/RESUME.pdf?dl=0"}
      >
        resume
      </StyledLink>
      {renderGif(location.pathname === "/for-fun" ? "snail" : location.pathname === "/about" ? "hand" : "flower")}
    </StyledNav>
  );
};

export default Header;
