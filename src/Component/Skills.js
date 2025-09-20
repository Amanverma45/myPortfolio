import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub } from "react-icons/si";
import "./Style/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card"><FaHtml5 size={40} color="#E34F26" /> HTML</div>
        <div className="skill-card"><FaCss3Alt size={40} color="#1572B6" /> CSS</div>
        <div className="skill-card"><FaJs size={40} color="#F7DF1E" /> JavaScript</div>
        <div className="skill-card"><FaReact size={40} color="#61DBFB" /> React</div>
        <div className="skill-card"><FaNodeJs size={40} color="#3C873A" /> Node.js</div>
        <div className="skill-card"><SiExpress size={40} color="#000000" /> Express.js</div>
        <div className="skill-card"><SiMongodb size={40} color="#4DB33D" /> MongoDB</div>
        <div className="skill-card"><SiGithub size={40} color="#181717" /> Git & GitHub</div>
      </div>
    </div>
  );
};

export default Skills;
