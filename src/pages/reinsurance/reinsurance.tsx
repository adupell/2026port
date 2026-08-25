import { Footer, Pill, TextComponent } from "../../components";
import {
  FooterPageContainer,
  Page,
  Section,
  TextSection,
  HalfImage,
  FullImage,
} from "../shared.styles";
import {
  MultiImageContainer,
  PillContainer,
  StyledMultiImage,
} from "./reinsurance.styles";
import UserJourney1 from "../../images/resinsurance/pw/userjourney-1-loginonboarding.png";
import UserJourney2 from "../../images/resinsurance/pw/userjourney-2-analytics.png";
import UserJourney3 from "../../images/resinsurance/pw/userjourney-3-submission.png";
import UserJourney4 from "../../images/resinsurance/pw/userjourney-4-quote.png";
import UserJourney5 from "../../images/resinsurance/pw/userjourney-5-policy.png";

const DesignSkillPills = [
  "accessibility",
  "user journeys",
  "user personas",
  "user experience design",
  "user interface design",
  "design systems",
  "wire framing",
  "prototyping",
  "user testing",
];
const SoftSkillPills = [
  "leadership",
  "adaptability",
  "communication",
  "collaboration",
  "presentation",
];

const Reinsurance = () => {
  const renderDesignSkillPills = () => {
    let pills;
    pills = DesignSkillPills.map((text: string) => {
      return <Pill type="project" text={text} />;
    });

    return pills;
  };

  const renderSoftSkillPills = () => {
    let pills;
    pills = SoftSkillPills.map((text: string) => {
      return <Pill type="project" text={text} />;
    });

    return pills;
  };

  return (
    <FooterPageContainer>
      <Page>
        <TextComponent
          projectPage
          text="reinsurance | elixirr | 18 months"
          type="body"
        />
        <TextComponent
          projectPage
          text="a multi-year, multi-product collaboration with an insurance brokerage and risk management service company"
          type="header"
        />
        <TextComponent projectPage text="design skills" type="title" />
        <PillContainer>{renderDesignSkillPills()}</PillContainer>
        <TextComponent projectPage text="soft skills" type="title" />
        <PillContainer>{renderSoftSkillPills()}</PillContainer>
        <TextComponent
          projectPage
          text="project 01: an internal tool for reinsurance brokers and analysts to assist with the underwriting, quote and policy process"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="overview" type="title" />
            <TextComponent
              projectPage
              text="Our client was a large insurance company with a reinsurance division. Their system fully operated over email, where users would often lose track of the contracting process, complex documents and data visualizations."
              type="body"
            />
            <TextComponent
              projectPage
              text="They needed an internal portal where they could successfully complete the underwriting, quoting and policy processes while collecting data for future contracts."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="goal" type="title" />
            <TextComponent
              projectPage
              text="Bring the reinsurance business into the modern digital world. We wanted to build an internal tool that would last and streamline the complicated, lengthy reinsurance workflow. The tool would service users across 5 areas: brokers, analysts, carrier management, carriers, and clients."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="user journeys" type="title" />
            <TextComponent
              projectPage
              text="One of the first steps in our process was to create user journey maps for each of the core workflows: sign up, login, onboarding, analytics, submissions, quote, and policy."
              type="body"
            />
            <TextComponent
              projectPage
              text="Our maps tracked when each type of user would be involved in the process and what actions, needs, and pain points they might encounter along the journey."
              type="body"
            />
            <TextComponent
              projectPage
              text="We also highlighted and made note of additional functionality and considerations for features that weren’t in scope for the MVP."
              type="body"
            />
          </TextSection>
          <MultiImageContainer>
            <StyledMultiImage src={UserJourney1} />
            <StyledMultiImage src={UserJourney2} />
            <StyledMultiImage src={UserJourney3} />
            <StyledMultiImage src={UserJourney4} />
            <StyledMultiImage src={UserJourney5} />
          </MultiImageContainer>
        </Section>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default Reinsurance;
