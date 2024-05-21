import React from 'react';
import './index.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeBanner from './components/HomeBanner';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion',
        }}
        innerStyle={{
          backgroundColor: '#F94892',
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Retail Apparel and Fashion"
          projectDesc="Modern American luxury brand with a rich heritage of craftsmanship and New York style."
          projectLink="https://www.coach.com/"
          deployedProjectLink="https://www.coach.com/"
          projectImg={require('./images/project1.png')}
        />

        <ProjectCard
          projectTitle="Bitcoin Tutorials"
          projectDesc="sCrypt specific course where students can learn how to write complex smart contracts from scratch."
          projectLink="https://www.satolearn.com/"
          deployedProjectLink="https://www.satolearn.com/"
          projectImg={require('./images/project2.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="E-Commerce"
          projectDesc="One-stop-shop for everything from appliances, furniture, mattresses, and more."
          projectLink="https://shermansnow.com/"
          deployedProjectLink="https://shermansnow.com/"
          projectImg={require('./images/project3.png')}
        />

        <ProjectCard
          projectTitle="Customer Data Platforms"
          projectDesc="GrowthOS for Marketing & Sales teams looking to use Customer Lifecycle AI to grow their business with all-in-one CDP, Audiences, Journeys, Experiments & Insights."
          projectLink="https://www.intempt.com/"
          deployedProjectLink="https://www.intempt.com/"
          projectImg={require('./images/project4.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="Keep Your Vehicle Happy"
          projectDesc="A mobile application to help users more easily manage their car-related needs."
          projectLink="https://www.vehiclevitals.com"
          deployedProjectLink="https://www.vehiclevitals.com"
          projectImg={require('./images/project5.png')}
        />
        <ProjectCard
          projectTitle="RAMSEY : The Simplest Way to Budget for Your Life"
          projectDesc="An iOS and Android native mobile app as well as a browser app for budgeting and personal finance."
          projectLink="https://www.ramseysolutions.com/"
          deployedProjectLink="https://www.ramseysolutions.com/"
          projectImg={require('./images/project6.png')}
        />
        <ProjectCard
          className="odd"
          projectTitle="Education Management"
          projectDesc="Free and open-source online learning management system. Many users of Sakai deploy it to support teaching and learning, research, and group collaboration."
          projectLink="https://www.sakailms.org/"
          deployedProjectLink="https://www.sakailms.org/"
          projectImg={require('./images/project7.png')}
        />
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
