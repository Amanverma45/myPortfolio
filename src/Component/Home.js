import React from 'react'
import './Style/Home.css'
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
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
        <img src="./Images/my.jpg" alt="my image" />
      </div>
    </div>
  )
}

export default Home
