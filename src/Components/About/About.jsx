import React from "react";
import aboutCSS from "./../About/About.module.css";
import aboutImg from "./../../assets/about-bg.png";

function About() {
  return (
    <div className={`${aboutCSS.AboutWrapper} section`} id="about">
      {/* Left Side - About Text & Skills */}
      <div className={aboutCSS.aboutContainer}>
        <h2>About Me</h2>
        <p>
          I'm Mukesh, and I am a fresher with a keen interest in frontend
          development and backend technologies. I have experience working with
          ReactJS, VueJS, Vuetify, and Strapi with PostgreSQL.
        </p>

        <div className={aboutCSS.skillWrapper}>
          <h2>My Skills</h2>
          <p>
          I am a detail-oriented and adaptable professional with a strong ability to manage tasks from start to finish. 
          </p>

          {/* Each Skill */}
          <div className={aboutCSS.skillItem}>
            <h3>React JS</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>HTML</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>CSS</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>Vue JS</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>JavaScript</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>C Programming</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>Strapi</h3>
            <div className={aboutCSS.line}></div>
          </div>
          <div className={aboutCSS.skillItem}>
            <h3>Java</h3>
            <div className={aboutCSS.line}></div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className={aboutCSS.AboutImg}>
        <img src={aboutImg} alt="About" />

      {/*  <div className={aboutCSS.Exp}>
          <h2>
          <span>2+ </span>monthsof internship as a Frontend Developer
          </h2>
        </div> */}
      </div>
    </div>
  );
}

export default About;
