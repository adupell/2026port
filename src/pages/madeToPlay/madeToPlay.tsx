import { Footer, Pill, TextComponent } from "../../components";
import {
  FooterPageContainer,
  Page,
  Section,
  TextSection,
  HalfImage,
  FullImage,
} from "../shared.styles";
import { PillContainer } from "./madeToPlay.styles";
import Branding from "../../images/madeToPlay/branding.png";
import Cover from "../../images/madeToPlay/cover.png";
import Gigamap from "../../images/madeToPlay/gigamap.png";
import InitialDesign from "../../images/madeToPlay/spreads.png";
import Illustrations from "../../images/madeToPlay/illustrations.png";
import Photography from "../../images/madeToPlay/photography.png";

const SkillPills = ["user research", "user testing", "branding", "book design"];

const MadeToPlay = () => {
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
          text="made to play | capstone project"
          type="body"
        />
        <TextComponent
          projectPage
          text="a do-it-yourself guide and handbook for parental monitoring"
          type="header"
        />
        <TextComponent projectPage text="skills" type="title" />
        <PillContainer>{renderSkillPills()}</PillContainer>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="overview" type="title" />
            <TextComponent
              projectPage
              text="Made to Play is a developmental handbook that utilizes accessible, household items to create a series of easy-to-make DIY toys. For each toy, there is a corresponding “guided play” activity in the book that assists parents in monitoring their child’s development from 0 to 3 years old."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="goals" type="title" />
            <TextComponent
              projectPage
              text="Developmental screening is not always accessible to parents of young children. With our book, parents will be more educated and aware of the positive impacts of active parental monitoring, allowing for earlier intervention into their child’s development milestones. Specifically, our project focused on accessibility, education, and awareness."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={Cover} />
        <TextComponent
          projectPage
          text="01 research & planning"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="early childhood development research"
              type="title"
            />
            <TextComponent
              projectPage
              text="Our team spent four months researching the early childhood development sector and gathering information on developmental milestones within the first three years of age."
              type="body"
            />
            <TextComponent
              projectPage
              text="This research guided our design decisions as we created a proof of concept for the Developmental Handbook that would become “Made to Play”. At the end of this semester, we met with the East Boston Social Center to receive feedback."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={Gigamap} />
        <FullImage src={InitialDesign} />
        <TextComponent projectPage text="02 branding" type="subheader" />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="design system & branding"
              type="title"
            />
            <TextComponent
              projectPage
              text="It was important to establish a system for the design elements in our book. From the feedback gathered from our first round of layout design, we explored other options, focusing on simple vectors and effective photography."
              type="body"
            />
            <TextComponent
              projectPage
              text="Our final design system outlines page formatting, typographical rules, color palette, pattern usage, as well as the tone and voice of our language."
              type="body"
            />
          </TextSection>
          <HalfImage src={Branding} />
        </Section>
        <Section>
          <TextSection>
            <TextComponent projectPage text="illustrations" type="title" />
            <TextComponent
              projectPage
              text="As a part of our instruction pages for building the toys, we chose to include visual illustrations that originated from the process of creating the toys ourselves. Using the real world process, we were able to create an easily understood system for parents."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={Illustrations} />
        <Section>
          <HalfImage src={Photography} />
          <TextSection right>
            <TextComponent projectPage text="photography" type="title" />
            <TextComponent
              projectPage
              text="We wanted photos of the toys that we made to be the cover of the toy instructions so parents could have a realistic image of what the final product would look like."
              type="body"
            />
            <TextComponent
              projectPage
              text="For our photography, we went with a white background so it would not be distracting from the toy. It also provided consistency across the variety in toys."
              type="body"
            />
          </TextSection>
        </Section>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default MadeToPlay;
