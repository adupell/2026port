import { Page, StyledButton } from "../shared.styles";
import { Content, StyledGif, TextContainer } from "./pageNotFound.styles";
import SnailGif from "../../assets/snail.gif";
import { TextComponent } from "../../components";

const PageNotFound = () => {
  return (
    <Page>
      <Content>
        <StyledGif src={SnailGif} />
        <TextContainer>
          <TextComponent type="header" text="Uh oh!" />
          <TextComponent
            type="subheader"
            text="We couldn't find the page you're looking for."
          />
        </TextContainer>
        <StyledButton href="/">Go back home</StyledButton>
      </Content>
    </Page>
  );
};

export default PageNotFound;
