import { Footer, Project, TextComponent } from "../../components";
import { FooterPageContainer, Page } from "../shared.styles";
import PersonalPortfolio from "../../images/home/personalportfolio.png";
import MadeToPlay from "../../images/home/madetoplay.png";
import Letterboxd from "../../images/home/letterboxd.png";
import GravelBurn from "../../images/home/gravel-burn.png";
import { ProjectContainer } from "./home.styles";

const HomePage = () => {
  return (
    <FooterPageContainer>
      <Page>
        <TextComponent
          text="a multi-disciplinary designer with a background in frontend development and magazine and newspaper design"
          type={"header"}
        />
        <TextComponent text="some of my work:" type="subheader" />
        <ProjectContainer>
          <Project
            to="/gravel-race"
            img={GravelBurn}
            title="professional cycling event companion app & website"
            description="Our client needed an offline mobile application for gravel cyclists to use while racing through the South African desert for 6 days. We also created a registration website for ticket purchases and add-ons."
            skills="sports & lifestyle | branding | mobile design"
          />
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
      <Footer />
    </FooterPageContainer>
  );
};

export default HomePage;
