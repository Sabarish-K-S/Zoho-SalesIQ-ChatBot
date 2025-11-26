import React from 'react'
import '../styles/chatbot.css'
import { GoogleGenAI } from "@google/genai";
import { useState,useRef } from 'react';
import { BsSendFill } from "react-icons/bs";
import Loading from './Loading';

const Chatbot = () => {

  const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});
  const [chats, setChats] = useState([]);
  const[load,setLoad]=useState(false);
  const [prompt, setPrompt] = useState()
  const targetref=useRef(null);
  const errorMsg="Something Went Wrong, it seems that the backend server is went down!! or it might be the API key limit is over, since it is the free tier API key so it has RPM of 15/min, TPM of 250K/min and RPD of 1K/day. SO PLEASE TRY AGAIN AFTER FEW MINUTES OR AFTER 24 HOURS";
  
  const client=async()=>{
    try{
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: `${prompt}`,
      });
      setLoad(false);
      setChats((prev)=>[...prev,response.text])
      const audio=new Audio("/assistant.wav");
      audio.play();
      targetref.current.scrollIntoView({behavior:'smooth'});
    }
    catch(error){
      setLoad(false);
      setChats((prev)=>[...prev,errorMsg])
      const audio=new Audio("/assistant.wav");
      audio.play();
      targetref.current.scrollIntoView({behavior:'smooth'});
    }
  }

  const handleClick=(prompt)=>{
    setLoad(true);
    const audio=new Audio("/user.wav");
    audio.play();
    setChats((prev)=>[...prev,prompt])
    targetref.current.scrollIntoView({behavior:'smooth'});
    setPrompt("")
    setTimeout(()=>{
      client(prompt);
    },1200)
    console.log(chats); 
  }

  return (
    <>
     <div className='chat-wrapper'>
        <img className='chatImg' src='./src/assets/robot3a.png'/>
        <div className='chat-container'>
          <div className='chat-container1'>
            <div className='chat-header'>
              <h1>ZOHO-SalesIQ</h1>
              <h2>Developed By Sabarish</h2>
            </div>
           {chats.map((element,index)=>{
            return <>
             <div key={index} className='msg-container' style={{justifyContent: index%2===0?"flex-end":"flex-start"}}>
               <div className={index%2==0?'user':'bot'}><h3>{element}</h3></div>
             </div>
             <br/>
            </>
           })}
           {load && <Loading/>}
           <div ref={targetref} className='scroll-viwe'></div>
           <div className='search-cntr'>
             <textarea className='search-box1' placeholder='Type a message...' rows={1} onInput={(e) => {
             e.target.style.height = "auto";
             e.target.style.height = `${e.target.scrollHeight}px`;
             }} value={prompt} onChange={(e)=>setPrompt(e.target.value)}></textarea>
              <button className='send-btn1' onClick={()=>{prompt&&prompt.trim()!="" && handleClick(prompt)}}><BsSendFill size={20} color='white'/></button>
           </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Chatbot