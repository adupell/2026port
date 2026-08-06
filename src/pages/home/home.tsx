import { Project, TextComponent } from "../../components";
import { Page } from "../shared.styles";
import PersonalPortfolio from "../../images/home/personalportfolio.png";
import MadeToPlay from "../../images/home/madetoplay.png";
import Letterboxd from "../../images/home/letterboxd.png";
import { ProjectContainer } from "./home.styles";

const HomePage = () => {
  return (
    <Page>
      <TextComponent
        text="i’m a multi-disciplinary designer with a background in frontend development and magazine and newspaper design."
        type={"header"}
      />
      <TextComponent
        text="check out some of my work below:"
        type={"subheader"}
      />
      <ProjectContainer>
        <Project
          to="/made-to-play"
          img={MadeToPlay}
          title="made to play"
          description="This project was designed to service the East Boston community, specifically for parents and young children. In efforts to close the gap for accessible developmental screening, this book contains easy, DIY toys that parents can make and engage with their child for monitoring."
          skills="branding | book design | social impact"
        />
        <Project
          to="/letterboxd"
          img={Letterboxd}
          title="letterboxd"
          description="As a user of this application, I noticed pitfalls in Letterboxd's current user experience and interface. This personal project focuses on redesigning screens and processes to improve engagement across the product."
          skills="user research | user experience | mobile design"
        />
        <Project
          to="https://amandadupell.surge.sh/"
          target="_blank"
          img={PersonalPortfolio}
          title="personal portfolio"
          description="When I graduated from university, I knew I wanted my first design-to-development project to be my personal portfolio. The projects showcased on this portfolio are from my college design career and are not included on this portfolio. Give it a look!"
          skills="web design | development"
        />
      </ProjectContainer>
    </Page>
  );
};

export default HomePage;
