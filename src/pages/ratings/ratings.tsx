import { Footer, Pill, TextComponent } from "../../components";
import {
  FooterPageContainer,
  FullImage,
  HalfImage,
  Page,
  Section,
  StyledVideo,
  TextSection,
} from "../shared.styles";
import { PillContainer } from "./ratings.styles";
import Cover from "../../images/gravelRace/appstore.png";

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
          text="a gravel race companion mobile application"
          type="header"
        />
        <TextComponent projectPage text="skills" type="title" />
        <PillContainer>{renderSkillPills()}</PillContainer>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="overview" type="title" />
            <TextComponent
              projectPage
              text="When the organisers approached us, they asked for a complete digital race companion. One that could guide 500 riders of varying skill levels through one of the most remote landscapes on Earth, where several days went without a single bar of signal."
              type="body"
            />
            <TextComponent
              projectPage
              text="From the rugged terrain of the Karoo to the communal campsites at sunset, this was a race designed for connection - with the land, fellow riders, and the journey itself. With stages that stretch across unpaved desert, mountain passes, and historic Karoo towns, the event attracts both pro-am racers and adventure cyclists from across the world, from ages 18 to 74."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="goals" type="title" />
            <TextComponent
              projectPage
              text="The team needed to solve a very human problem: How do we keep riders informed, safe, and inspired in moments of total digital isolation? Each day, participants faced new routes, new terrains, and new logistics, while fatigue and dehydration dulled their focus."
              type="body"
            />
            <TextComponent
              projectPage
              text="Our client had written a traditional rider manual. However, this was dense and impractical mid-race. Riders needed a single, pocket-sized command centre that worked offline and adapted dynamically to their journey."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={Cover} />
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default Ratings;
