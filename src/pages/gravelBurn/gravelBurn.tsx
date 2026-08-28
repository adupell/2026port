import { Footer, Pill, TextComponent } from "../../components";
import {
  FooterPageContainer,
  Page,
  Section,
  TextSection,
} from "../shared.styles";
import { PillContainer } from "./gravelBurn.styles";

const SkillPills = [
  "brand identity",
  "user research",
  "user interviews",
  "wireframing",
  "prototyping",
  "mobile application design",
  "website design",
];

const GravelBurn = () => {
  const renderSkillPills = () => {
    let pills;
    pills = SkillPills.map((text: string) => {
      return <Pill type="project" text={text} />;
    });

    return pills;
  };

  return (
    <FooterPageContainer>
      <Page>
        <TextComponent
          projectPage
          text="gravel cycling | elixirr | 4 months"
          type="body"
        />
        <TextComponent
          projectPage
          text="a gravel cycling race companion mobile application with live data"
          type="header"
        />
        <TextComponent projectPage text="skills" type="title" />
        <PillContainer>{renderSkillPills()}</PillContainer>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="overview" type="title" />
            <TextComponent
              projectPage
              text="Letterboxd is a social media platform and network for film lovers. It allows you to track, rate, and review movies you’ve seen and add others to a watchlist for future viewing."
              type="body"
            />
            <TextComponent
              projectPage
              text="The application has garnered a large following and is one of the leading “movie review” mobile applications."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="goals" type="title" />
            <TextComponent
              projectPage
              text="It can be overwhelming and complicated for users to discover films, movie lists, and other users to follow on the application."
              type="body"
            />
            <TextComponent
              projectPage
              text="My goal with this project was to redesign specific workflows and screens to ease usability and expose more features on the platform."
              type="body"
            />
          </TextSection>
        </Section>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default GravelBurn;
