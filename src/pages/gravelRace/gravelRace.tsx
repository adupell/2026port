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
import { PillContainer, StyledLink } from "./gravelRace.styles";
import Cover from "../../images/gravelRace/appstore.png";
import ColorGuide from "../../images/gravelRace/color-guide.png";
import Inspo from "../../images/gravelRace/inspo.png";
import Concept1 from "../../images/gravelRace/night-burn.png";
import Concept2 from "../../images/gravelRace/safari.png";
import Wireframe from "../../images/gravelRace/wireframe-2.png";
import Hifi from "../../images/gravelRace/hifi.png";
import HifiVideo from "../../images/gravelRace/app-demo.mp4";
import Planning from "../../images/gravelRace/planning-1.png";
import Roadmap from "../../images/gravelRace/roadmap.png";

const SkillPills = [
  "user research",
  "user interviews",
  "brand identity",
  "wireframing",
  "prototyping",
  "mobile application design",
];

const GravelRace = () => {
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
          text="cycling | elixirr | 2 months"
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
        <TextComponent
          projectPage
          text="01 research & workshops"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="discovery" type="title" />
            <TextComponent
              projectPage
              text="We immersed ourselves in the race’s culture. We began with deep discovery workshops involving race organisers and technical teams. We developed rider proto-personas, which informed the foundations of our design thinking. Through stakeholder interviews and scenario mapping, we traced a rider’s day: from pre-dawn prep in a tent, through each climb and checkpoint, to recovery under Karoo starlight."
              type="body"
            />
            <TextComponent
              projectPage
              text="We analysed existing cycling tools (Ride With GPS, Strava, Trailforks) to understand how they visualised terrain data and stage progress. Then, we tailored those insights to the client's luxury-adventure hybrid identity."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent
              projectPage
              text="information architecture & ux strategy"
              type="title"
            />
            <TextComponent
              projectPage
              text="We converted the existing rider manual into an interactive architecture designed for clarity and flow. Content was reorganised around rider context, covering what they needed before a stage, during a stage, and after a stage."
              type="body"
            />
            <TextComponent
              projectPage
              text="Offline data caching and CMS synchronisation allowed dynamic updates even without signal. The system automatically refreshed content when riders passed through connected checkpoints."
              type="body"
            />
            <TextComponent
              projectPage
              text="We created a live event view. This automatically updated itineraries and ticking off completed stages. This transformed the app into a living progress tracker, both functional and motivational."
              type="body"
            />
          </TextSection>
        </Section>
        <FullImage src={Roadmap} />
        <FullImage src={Planning} />
        <TextComponent projectPage text="02 wireframes" type="subheader" />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="Wireframes mapped every user journey, from checking morning schedules to viewing race stages, tracking results, and accessing logistical info. We also established a component library, the foundation for scalability and consistency across screens."
              type="body"
            />
          </TextSection>
          <HalfImage src={Wireframe} />
        </Section>
        <TextComponent
          projectPage
          text="03 visual design & brand expression"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="branding" type="title" />
            <TextComponent
              projectPage
              text="A dark mode palette became essential: we predicted that riders would be accessing their app mostly at night from their tents, as they learned what to expect from the next day’s stage."
              type="body"
            />
            <TextComponent
              projectPage
              text="We took inspiration from apps with bold and neutral colors, large font, data visualisations, and photography."
              type="body"
            />
          </TextSection>
          <HalfImage src={Inspo} />
        </Section>
        <FullImage src={ColorGuide} />
        <Section>
          <TextSection left>
            <TextComponent
              projectPage
              text="concept exploration"
              type="title"
            />
            <TextComponent
              projectPage
              text="We presented the client with two concepts for the application:"
              type="body"
            />
            <TextComponent
              projectPage
              text="Concept One: A sleek, data-driven experience with high contrast, dark themes, bold orange accents, and performance analytics at the forefront."
              type="body"
            />
            <TextComponent
              projectPage
              text="Concept Two: A nature-inspired experience, merging orange and green with earthy neutrals and immersive imagery of the South African landscape."
              type="body"
            />
            <TextComponent
              projectPage
              text="The team gravitated to Concept Two, captivated by how it celebrated the soul of the race without sacrificing its technical edge. We leaned into the duality of grit and grace: sharp angles and soft curves echo the undulating gravel paths and harsh terrain."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <HalfImage src={Concept1} />
          <HalfImage src={Concept2} />
        </Section>
        <TextComponent
          projectPage
          text="04 high-fidelity design"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="brand application" type="title" />
            <TextComponent
              projectPage
              text="With the direction chosen, we evolved the wireframes into high-fidelity prototypes. Every pixel echoed the brand’s core values — strength, endurance, and connection to the environment. The UI was clean, tactile, and energizing."
              type="body"
            />
            <TextComponent
              projectPage
              text="We collaborated closely with developers, ensuring the app’s performance aligned with design intent. Offline functionality, leaderboard updates, and CMS-driven content were rigorously tested, even under simulated low-signal conditions."
              type="body"
            />
            <TextComponent
              projectPage
              text="The following video shows the prototype we created for them. The prototype includes copy and placeholder text because our client relied on a custom-built CMS to enter content when written. Because the project too "
              type="body"
            />
          </TextSection>
          <HalfImage src={Hifi} />
        </Section>
        <Section>
          <TextSection left>
            <TextComponent projectPage text="prototype" type="title" />
            <TextComponent
              projectPage
              text="The following video shows the prototype we created for them. The prototype includes placeholder text because our client relied on a custom-built CMS to enter content when written."
              type="body"
            />
            <TextComponent
              projectPage
              text="Because the project turnaround was 2 months, we created the framework for the application with mock copy so we didn't need to wait on any internal team members."
              type="body"
            />
          </TextSection>
        </Section>
        <Section>
          <StyledVideo controls loop muted>
            <source src={HifiVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Section>
        <TextComponent
          projectPage
          text="05 impact & response"
          type="subheader"
        />
        <Section>
          <TextSection left>
            <TextComponent projectPage text="launch" type="title" />
            <TextComponent
              projectPage
              text="Our mobile application launched after 2 months of design and 2 months of development, landing in the hands of the racers just in time for the event."
              type="body"
            />
            <TextComponent
              projectPage
              text="As our client continues to host cycling events, we hope to QA and further improve upon the launched application."
              type="body"
            />
          </TextSection>
          <TextSection>
            <TextComponent projectPage text="testimonials" type="title" />
            <TextComponent
              projectPage
              text="Payson McElveen and Haley Smith, professional cyclists, gave the app experience praise during a stage recap on an Apple podcast, With Pace."
              type="body"
            />
            <TextComponent
              projectPage
              text='"You&apos;re literally reading the results directly off of the app."'
              type="body"
            />
            <TextComponent
              projectPage
              text='"I know, the app is insane..."'
              type="body"
            />
            <TextComponent
              projectPage
              text="&quot;It's like when you go to a nice museum and the museum has an app and there's different versions of the interpretive experience you can have. There's the routes, and the wildlife on the routes, and the key segments. There's infographics, it's crazy!&quot;"
              type="body"
            />
            <TextComponent
              projectPage
              text="&quot;I've been using it to study the stage for the upcoming day... It's just really good.&quot;"
              type="body"
            />
            <StyledLink
              target="_blank"
              href="https://podcasts.apple.com/ch/podcast/gravel-burn-stage-2-recap-with-haley-smith/id1459162520?i=1000733778978&l=en-GB"
            >
              Listen to the episode here, with the testmonial at the 11:31 mark
            </StyledLink>
          </TextSection>
        </Section>
      </Page>
      <Footer />
    </FooterPageContainer>
  );
};

export default GravelRace;
