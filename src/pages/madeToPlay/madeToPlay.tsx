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
import UserTesting from "../../images/madeToPlay/usertesting.png";
import Observations from "../../images/madeToPlay/observations.png";
import FinalDesign1 from "../../images/madeToPlay/FinalDesign1.png";
import FinalDesign2 from "../../images/madeToPlay/FinalDesign2.png";
import FinalDesign3 from "../../images/madeToPlay/FinalDesign3.png";
import FinalDesign4 from "../../images/madeToPlay/FinalDesign4.png";
import FinalDesign5 from "../../images/madeToPlay/FinalDesign5.png";
import FinalDesign6 from "../../images/madeToPlay/FinalDesign6.png";
import FinalDesign7 from "../../images/madeToPlay/FinalDesign7.png";
import FinalDesign8 from "../../images/madeToPlay/FinalDesign8.png";
import FinalDesign9 from "../../images/madeToPlay/FinalDesign9.png";

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
        <TextComponent projectPage text="03 user testing" type="subheader" />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="script template" type="title" />
            <TextComponent
              projectPage
              text="For our user testing, we created a template with the format for a user testing session."
              type="body"
            />
          </TextSection>
          <HalfImage src={UserTesting} />
        </Section>
        <Section>
          <HalfImage src={Observations} />
          <TextSection right>
            <TextComponent projectPage text="observations" type="title" />
            <TextComponent
              projectPage
              text="While user testing, we were looking for feedback related to the language, illustrations, and process of making each toy to ensure an easy and logical flow. Our user testing sessions were recorded over Zoom with permission."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="feedback & changes" type="title" />
            <TextComponent
              projectPage
              text="While user testing, we were looking for feedback related to the language, illustrations, and process of making each toy to ensure an easy and logical flow. Our user testing sessions were recorded over Zoom with permission."
              type="body"
            />
          </TextSection>
        </Section>
        <TextComponent projectPage text="04 final designs" type="subheader" />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="The following pages showcase some of the final spreads for the design of our book."
              type="body"
            />
            <TextComponent
              projectPage
              text="We chose to incorporate our larger-pattern pieces across the spreads, as it ties in more clearly. The main components of the to pages and guided play remained the same, with some slight changes to illustrations where needed."
              type="body"
            />
            <TextComponent
              projectPage
              text="We also chose to have the guided play immediately follow the toy pages because it made sense when discussing the flow of creating a toy and then finding the activity to use it in."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={FinalDesign1} />
        <FullImage src={FinalDesign2} />
        <FullImage src={FinalDesign3} />
        <FullImage src={FinalDesign4} />
        <FullImage src={FinalDesign5} />
        <FullImage src={FinalDesign6} />
        <FullImage src={FinalDesign7} />
        <FullImage src={FinalDesign8} />
        <FullImage src={FinalDesign9} />
        <TextComponent projectPage text="05 impact" type="subheader" />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="city of Boston presentation and distribution"
              type="title"
            />
            <TextComponent
              projectPage
              text="At the end of the semester, we presented our final book to the East Boston Social Center and several people from the mayor’s office for childhood education."
              type="body"
            />
            <TextComponent
              projectPage
              text="We have continued to work with the city of Boston through the Mayor's office to print and distribute our book citywide to families with young children. You can now find Made To Play in all Boston public libraries, as well as several social centers we worked with. The book is available in over 7 languages!"
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent
              projectPage
              text="fast company magazine World Changing Idea nominee"
              type="title"
            />
            <TextComponent
              projectPage
              text="As of May 2023, our project was honored as a nominee for the World Changing Idea for Education by Fast Company Magazine."
              type="body"
            />
            <TextComponent
              projectPage
              text="As stated by the magazine, this sector focuses on “companies, organizations, or initiatives that help inspire better and more equitable learning”."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="takeaways" type="title" />
            <TextComponent
              projectPage
              text="It was amazing to meet and work with the East Boston Social Center, as I feel like our design decisions are driven by a community that directly benefits from the product we made instead of a “personal project”."
              type="body"
            />
            <TextComponent
              projectPage
              text="Together, we researched, created a design system, user tested, and published a book. The experience was incredibly rewarding, and I am so proud of the final product!"
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
