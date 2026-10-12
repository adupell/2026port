import { Footer, Pill, TextComponent } from "../../components";
import {
  FooterPageContainer,
  Page,
  Section,
  TextSection,
} from "../shared.styles";
import { PillContainer } from "./ratings.styles";

const SkillPills = [
  "user research",
  "user interviews",
  "information architecture",
  "brand extension",
  "wireframing",
  "prototyping",
  "UI design",
  "design systems",
  "component libraries",
];

const Ratings = () => {
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
          text="credit ratings & financial services | elixirr | 8 months"
          type="body"
        />
        <TextComponent
          projectPage
          text="redesigning the digital experience for a leading financial services provider"
          type="header"
        />
        <TextComponent projectPage text="skills" type="title" />
        <PillContainer>{renderSkillPills()}</PillContainer>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="overview" type="title" />
            <TextComponent
              projectPage
              text="Overview"
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="goals" type="title" />
            <TextComponent
              projectPage
              text="Goals"
              type="body"
            />
          </TextSection>
        </Section>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default Ratings;
