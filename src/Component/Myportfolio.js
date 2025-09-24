import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub } from "react-icons/si";
import './Style/Portfolio.css'
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";

const Myportfolio = () => {
  return (
    <div>

      {/* Home  */}

      <div className="home">
        <h5>Welcome </h5>
        <div>
          <h1 className='download'>
            <span className="line line1">Hello, I am Aman Verma</span>
            <span className="line line2">I build responsive</span>
            <span className="line line3">& modern websites</span>
            <a href="./Images/Resume.pdf" download="Aman_Verma_Resume" target="_blank">
              <button><IoMdDownload />Download Resume</button>
            </a>
          </h1>
        </div>
        <div>
          <img src="./Images/my.jpg" alt="aman" />
        </div>
      </div>

      {/* About  */}

      <div className='about'>
        <div className='dp1'>
          <img src='./Images/my.jpg' alt="verma" />
        </div>
        <div className='para'>
          <h2>About Me</h2>
          <p>
            Hello, My name is Aman Verma currently leaving in Indore (India).
            I have completed my bachlors degree in B.tech CS at <strong> Mathura Devi Intitute of Technology and Management Indore </strong>,which is affiliated with RGPV University Bhopal (Madhya predesh).I have gained valuable skills in <b>HTML | CSS | JS | MongoDB | Express js | React | Node js </b>
          </p>
        </div>
      </div>

      {/* Skills  */}

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

      {/* Contact  */}
      <div className='Contact-container'>
        <form action="https://api.web3forms.com/submit" method="POST" className='Contact-form'>
          <div className='contact-title'>
            <h2>Get In Touch</h2>
            <hr />
          </div>
          <input type="hidden" name="access_key" value="f71c9121-a023-4bbb-9fc8-e139e9d34bf8"></input>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" placeholder='Message' required></textarea>
          <button type='submit'>Submit</button>
        </form>
        <div className="right">
          <img src="./Images/contect.jpeg" alt="" />
        </div>
      </div>

      {/* footer  */}
      <div className="footer">
        <h1>AMAN VERMA</h1>
        <h2>Full Stack Developer</h2>

        <div className="footer-links">
          <a href="mailto:av478136@gmail.com">
            <MdAlternateEmail /> av478136@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/aman-verma-2b1216350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin /> Aman Verma
          </a>

          <a
            href="https://wa.me/918435856067"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> 8435856067
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Aman Verma. All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Myportfolio
