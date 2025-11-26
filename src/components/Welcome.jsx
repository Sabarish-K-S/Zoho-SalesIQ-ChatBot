import React, { useEffect, useRef, useState } from 'react'
import '../styles/welcome.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import robot from '../assets/robot1.png'
import leetCode from '../assets/lcphoto.png'
import mailLogo from '../assets/gmail.jpg'
import inLogo from '../assets/linkedin.jpg'

const Welcome = () => {
  const target=useRef(null)
  const [count,setCount]=useState(0)
  const skills=["DSA In JAVA","HTML,CSS,ReactJS","Learning Spring Boot","Aspiring Software Developer","Learning MySQL"]
  const navigate=useNavigate();

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCount(prev=>prev+1===skills.length?0:prev+1)
    },2000)
    return()=> clearInterval(interval);
  },[])

  const handleScroll=()=>{
    target.current.scrollIntoView({behavior:'smooth'});
  }
  
  const handleNavigate=()=>{
    navigate('/chatbot');
  }

  return (
    <>
    <div className='wrapper'>
      <div>
       <img className='robot1' src={robot}/>
      </div>
      <div className='right-view'>
        <div className='skills'>
          <div className='skill'>
            <p style={{fontSize:"clamp(0.938rem, 0.723rem + 1.071vw, 1.688rem)"}}>{skills[count]}</p>
          </div>
        </div><br/>
        <h1>Developed By Sabarish</h1>
        <h2>Aspiring Software Developer</h2>
        <h3>I’ve built ZOHO-SalesIQ-ChatBot using the Gemini API (model: gemini-2.5-flash-lite), I used ReactJS to build this project. Since it is a free tier API key so it has usage limits (Usage limits: 15 requests/min, 250k tokens/min, 1,000 requests/day.)<span className='bold'><bold> &nbsp;SO PLEASE USE IT LIMITEDLY&nbsp;</bold></span></h3>
        <h3> I also used the Clamp() Calculator <span><a className='link' href='https://marcbacon.com/tools/clamp-calculator/'>https://marcbacon.com/tools/clamp-calculator/</a></span> an excellent tool that helped me make the website fully responsive across all devices. Create your API key from <span><a className='link' href='https://aistudio.google.com/api-keys'> Google AI Studio</a></span> and for docs checkout Google AI for Developers<span><a className='link' href='https://ai.google.dev/gemini-api/docs'> Google AI for Developers</a></span></h3><br/>
        <div>
           <button className='btn' onClick={handleNavigate}>Get Started  <FaArrowRightLong/></button>
           <button className='btnAbout' onClick={handleScroll}>About Me</button> 
        </div>
      </div>
    </div>
    <div className='About' ref={target}><br/>
      <h1>About Me</h1><br/>
      <div className='line'></div>
      <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am Sabarish, an aspiring software developer with a passion for creating innovative solutions. I have a strong foundation in data structures and algorithms using Java, and I am proficient in front-end technologies such as HTML, CSS, and ReactJS. Currently, I am expanding my skill set by learning Spring Boot for back-end development and MySQL for database management. I am eager to contribute to exciting projects and collaborate with like-minded professionals in the tech industry.</h3><br/>
      <div className='wrapperLC'>
        <div className='lcdiv'>
          <img className='lcImage' src={leetCode}/>
          <h3>I’ve solved over 90+ problems on LeetCode, including 59 easy, 35 medium, and 2 hard challenges. Through consistent practice, I’ve strengthened my problem-solving and algorithmic thinking skills, gaining hands-on experience with data structures and efficient coding techniques.</h3>
        </div><br/>
      <div className='links'>
       <div className='subwrapper'>
         <img className='inImage' src={inLogo}/>
         <div className='line1'></div>
         <a href='https://www.linkedin.com/in/sabarish-k-s-103975299/'>https://www.linkedin.com/in/sabarish-k-s-103975299/</a>
       </div><br/>
       <div className='subwrapper'>
         <img className='mailImage' src={mailLogo}/>
         <div className='line1'></div>
         <h3>sabarish28072006@gmail.com</h3>
       </div><br/><br/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Welcome
