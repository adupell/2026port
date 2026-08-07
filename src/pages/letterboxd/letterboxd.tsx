import { Footer, Pill, TextComponent } from "../../components";
import {
  FooterPageContainer,
  Page,
  Section,
  TextSection,
  HalfImage,
  FullImage,
} from "../shared.styles";
import { PillContainer } from "./letterboxd.styles";
import Cover from "../../images/letterboxd/letterboxdCoverImage.png";
import Brand from "../../images/letterboxd/existingbrand.png";
import UserFeedback from "../../images/letterboxd/userfeedback.png";
import SignUpFlow from "../../images/letterboxd/signupflow.png";
import HomepageFlow from "../../images/letterboxd/homepageflow.png";
import Sketches from "../../images/letterboxd/sketches.png";
import HomePageSketch from "../../images/letterboxd/homesketch.png";
import HomeLofi from "../../images/letterboxd/homelofi.png";
import SignUpFinal from "../../images/letterboxd/signupfinal.png";
import HomeFinal from "../../images/letterboxd/homefinal.png";

const SkillPills = ["user research", "user experience", "mobile design"];

const Letterboxd = () => {
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
          text="letterboxd | personal project"
          type="body"
        />
        <TextComponent
          projectPage
          text="a movie social media platorm and mobile application redesign"
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
        <FullImage src={Cover} />
        <TextComponent
          projectPage
          text="01 existing brand & research"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="As a part of redesigning an existing brand and application, it is important to maintain consistency while improving current user experiences. I will be using the same color palette and Inter as the font family for readability."
              type="body"
            />
          </TextSection>
          <HalfImage src={Brand} />
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="strengths" type="title" />
            <TextComponent
              projectPage
              text="Letterboxd is a one-stop shop for reviewing films you’ve seen, adding films to a future watchlist, and engaging with other users with their own opinions. Their platform has proven to be successful, becoming the leading mobile application in its genre. The social aspect and “casual critic” role established for users gives it leverage over similar products."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="weaknesses" type="title" />
            <TextComponent
              projectPage
              text="Some workflows and user experiences on the application are overcomplicated and confusing for the discovery of new movies. This can be intimidating and limit user adoption. Missing features like movie quotes and awards could allow for other products to make up for areas Letterboxd is lacking in or blocking with a $50 per year paywall."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <HalfImage src={UserFeedback} />
          <TextSection right>
            <TextComponent projectPage text="user feedback" type="title" />
            <TextComponent
              projectPage
              text="To gauge user feedback and pain points, I consulted friends who are users and 50 application reviews from both the Google Play and Apple App stores. From this information, I compiled a list of common pitfalls in the application’s user experiences. I did not take into account reviews that mentioned the applications advertisements and premium service."
              type="body"
            />
          </TextSection>
        </Section>
        <TextComponent projectPage text="02 strategy plan" type="subheader" />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="user personas" type="title" />
            <TextComponent
              projectPage
              text="To address a range of users, I created a small set of user stories to better define who users are and prioritize what their needs and expectations from the product."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="alex" type="title" />
            <TextComponent projectPage text="avid movie fan" type="body" />
            <TextComponent
              projectPage
              text="Alex uses Letterboxd to review films and track his film-watching habits. He wants to expand his current taste by discovering new genres he typically does not engage with."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="sam" type="title" />
            <TextComponent projectPage text="casual viewer" type="body" />
            <TextComponent
              projectPage
              text="Sam wants to learn more about film culture and trends. They are interested in learning more about popular movies."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <TextSection>
            <TextComponent projectPage text="areas of focus" type="title" />
            <TextComponent
              projectPage
              text="After initial research and analyzing the limitations of Letterboxd, I chose two areas of focus:"
              type="body"
            />
          </TextSection>
        </Section>
        <TextComponent
          projectPage
          text="1. Create a new sign up flow with user follow and movie recommendations"
          type="subheader"
        />
        <TextComponent
          projectPage
          text="2. Rework the home screen to include movie recommendations and access to hidden features"
          type="subheader"
        />
        <Section>
          <TextSection>
            <TextComponent projectPage text="user flows" type="title" />
            <TextComponent
              projectPage
              text="For each of the areas of focus, I created an ideal user flow to help me identify potential pain points and better understand the structure for my designs."
              type="body"
            />
          </TextSection>
        </Section>
        <TextComponent projectPage text="sign up flow" type="body" />
        <FullImage src={SignUpFlow} />
        <TextComponent projectPage text="homepage flow" type="body" />
        <FullImage src={HomepageFlow} />
        <TextComponent projectPage text="03 brainstorm" type="subheader" />
        <Section>
          <TextSection>
            <TextComponent
              projectPage
              text="sketch & lo-fi designs"
              type="title"
            />
            <TextComponent
              projectPage
              text="To begin the ideation phase, I started by sketching low-fidelity screens that aligned with the user flows from the strategy phase and stemmed from my initial research."
              type="body"
            />
            <TextComponent
              projectPage
              text="From there, I created a low-fidelity layout for the application's home screen."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={Sketches} />
        <TextSection>
          <TextComponent projectPage text="sign up sketches" type="title" />
          <TextComponent
            projectPage
            text="A sketch of the first screen of the new sign up flow which prompts users to fill out their email and choose a username and password."
            type="body"
          />
          <TextComponent
            projectPage
            text="A sketch of the second screen of the new sign up flow which prompts users to select genres that they're interested in."
            type="body"
          />
          <TextComponent
            projectPage
            text="A sketch of the third screen of the new sign up flow which displays a list of users related to their genres of interest to follow. The user can choose which users to follow."
            type="body"
          />
        </TextSection>
        <Section>
          <HalfImage src={HomePageSketch} />
          <TextSection right>
            <TextComponent projectPage text="homepage sketch" type="title" />
            <TextComponent
              projectPage
              text="A sketch of the second screen of the new sign up flow which prompts users to select genres that they're interested in."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="homepage lofi" type="title" />
            <TextComponent
              projectPage
              text="A sketch of the first screen of the new sign up flow which prompts users to fill out their email and choose a username and password."
              type="body"
            />
          </TextSection>
          <HalfImage src={HomeLofi} />
        </Section>
        <Section>
          <TextSection>
            <TextComponent
              projectPage
              text="new sign up screens"
              type="title"
            />
            <TextComponent
              projectPage
              text="To address the lack of movie recommendations and user-to-user interactions, I wanted to include new screens in the sign up process."
              type="body"
            />
            <TextComponent
              projectPage
              text="In these new screens, users will select genres that they like or are interested in. From there, they will be able to follow users that may have similar interests or popularity in a genre."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={SignUpFinal} />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="new home screen" type="title" />
            <TextComponent
              projectPage
              text="The home screen redesign allows for more film discovery for a user by providing movies, movie lists and user follow recommendations based on preferences."
              type="body"
            />
            <TextComponent projectPage text="featured movies" type="title" />
            <TextComponent
              projectPage
              text="To engage users more, I wanted to create a more interactive UI for the popular movies of the week. This redesign includes more information for the user to base their interactions around. The user is given insight into the public ratings and review count, as well as the movie’s related genres."
              type="body"
            />
            <TextComponent
              projectPage
              text="movie recommendations"
              type="title"
            />
            <TextComponent
              projectPage
              text="Based on the user’s movie reviews, ratings, users they follow, and genre selections upon sign up, their movie recommendations will be updated."
              type="body"
            />
            <TextComponent
              projectPage
              text="This section serves as a way to continuously rotate user preferences and ensure they are discovering new films every week."
              type="body"
            />
            <TextComponent projectPage text="new from friends" type="title" />
            <TextComponent
              projectPage
              text="Taking from the original home screen, I decided to keep the “New from friends” feature. This allows for users to discover new films and read reviews from users they follow."
              type="body"
            />
            <TextComponent projectPage text="new from friends" type="title" />
            <TextComponent
              projectPage
              text="When researching user feedback, many users reported “movie lists” as one of the application’s hidden features."
              type="body"
            />
            <TextComponent
              projectPage
              text="To address this pain point, I chose to include a peek into a user’s suggested lists on the home screen. This allows for further film exploration, as well as insight into one of the app’s features."
              type="body"
            />
            <TextComponent projectPage text="popular reviews" type="title" />
            <TextComponent
              projectPage
              text="As a way for users to discover more users and films, I included this “Popular reviews” section. Users will be able to read popular reviews on popular movies and choose whether or not to a.) follow the user and/or b.) watch the film."
              type="body"
            />
            <TextComponent projectPage text="suggested users" type="title" />
            <TextComponent
              projectPage
              text="As the user continues to log their film activity, this section will allow them to discover new users to follow."
              type="body"
            />
          </TextSection>
          <HalfImage src={HomeFinal} />
        </Section>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default Letterboxd;
