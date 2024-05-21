import React from 'react';
import './AboutMeStyle.css';
// import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span> Duane </span>, highly skilled software engineer with a strong
        track record of success in collaborating with teams to create
        exceptional software solutions. <br />
        <br />
        I've worked in the web world for most of my career, delivering
        beautiful, responsive, and accessible front ends. I've utilizing a vast
        array of tools to do this.{' '}
        <span>React, Next JS, Vue, Node, Laravel</span>. I've worked in{' '}
        <span>React Native</span> building mobile application front ends.
        <br /> I've built the backends for many web applications, designing the
        database and models, and utilized cloud services via <span>
          AWS
        </span>{' '}
        and <span>Azure</span> to deliver some really cool live fundraising
        tools. <br />
        I've built internal tools for use on many different teams, working in
        collaboration with IT teams, marketing, fundraising, and direct service
        teams to analyze data and achieve incredible goals. <br />
        <br />
        My latest developer journeys have involved <span>OpenAI</span>, and
        figuring out how AI can help solve business goals as our "personal
        digital assistant." <br />
        <br />
        I'm hungry, eager, and excited about my future in this industry. I'm
        passionate about my work and even more passionate about the people who
        work in it. I want to be on a team where everyone succeeds and grows,
        and we help make the world a better place. It's a great way for me to
        unwind and tap into my creative side. Want to know more about me? Feel
        free to{' '}
        <a
          className="resume"
          href="https://drive.google.com/file/d/1t863OAhS2Y9AQ_j2oNXVa4Yjji_4e8DQ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          explore my resume.
        </a>
      </div>
    </div>
  );
}
