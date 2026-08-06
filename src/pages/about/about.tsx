import { Footer, Pill, TextComponent } from "../../components";
import { FooterPageContainer, Page } from "../shared.styles";
import {
  Content,
  PillContainer,
  RightSide,
  SectionContainer,
  StyledImg,
} from "./about.styles";
import ProfilePhoto from "../../images/about/profile.jpg";
import Frank from "../../images/about/frank.png";

const SkillPills = [
  "adobe creative cloud",
  "figma",
  "user research",
  "user interviews",
  "user testing",
  "a/b testing",
  "wireframes",
  "prototypes",
  "interaction design",
  "layout design",
  "cursor",
  "claude",
];

const LovePills = [
  "reading",
  "sketching",
  "gardening",
  "hiking",
  "fonts",
  "movie theaters",
  "ceramics",
  "cider",
  "concerts",
  "halloween",
  "Frank",
];

const FrankPills = ["fish", "chicken", "gravy", "playing", "sleeping"];

const AboutPage = () => {
  const renderSkillPills = () => {
    let pills;
    pills = SkillPills.map((text: string) => {
      return <Pill type="profile" text={text} />;
    });

    return pills;
  };

  const renderLovePills = () => {
    let pills;
    pills = LovePills.map((text: string) => {
      return <Pill type="profile" text={text} />;
    });

    return pills;
  };

  const renderFrankPills = () => {
    let pills;
    pills = FrankPills.map((text: string) => {
      return <Pill type="profile" text={text} />;
    });

    return pills;
  };

  return (
    <FooterPageContainer>
      <Page>
        <Content>
          <StyledImg src={ProfilePhoto} />
          <RightSide>
            <SectionContainer>
              <TextComponent type="header" text="my name is Amanda." />
              <TextComponent
                type="body"
                text="I’ve been a designer for as long as I can remember, drawing my parent’s birthday cards by hand every year."
              />
              <TextComponent
                type="body"
                text="As an adult, I’ve grown to love design in all forms. In my work, I focus on creating beautiful, accessible digital experiences for all."
              />
              <TextComponent
                type="body"
                text="I am a graduate of Northeastern University, class of 2022, with a degree in Computer Science and Experience Design."
              />
            </SectionContainer>
            <SectionContainer>
              <TextComponent type="body" text="i have experience with..." />
              <PillContainer>{renderSkillPills()}</PillContainer>
            </SectionContainer>
            <SectionContainer>
              <TextComponent type="body" text="i love..." />
              <PillContainer>{renderLovePills()}</PillContainer>
            </SectionContainer>
          </RightSide>
        </Content>
        <Content>
          <StyledImg src={Frank} />
          <RightSide>
            <SectionContainer>
              <TextComponent type="header" text="my name is Frank." />
              <TextComponent
                type="body"
                text="i’ve been sitting on my mom’s lap during meetings since 2020."
              />
            </SectionContainer>
            <SectionContainer>
              <TextComponent type="body" text="i love..." />
              <PillContainer>{renderFrankPills()}</PillContainer>
            </SectionContainer>
          </RightSide>
        </Content>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default AboutPage;
