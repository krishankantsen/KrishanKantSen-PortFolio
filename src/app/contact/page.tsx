'use client'
import "animate.css"
import { useState } from "react";
export default function Contact() {
  const [name ,setName]=useState("")
  const [email, setEmail]=useState("")
  const[msg,setMsg]=useState("")
  const sendEmail=async()=>{
    const data = { name, email, msg };

  try {
    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
   if(result.success){
    alert("I will contact you shortly")
   }

    // Handle the response accordingly
  } catch (error) {
    console.error('Error sending email:', error);
  }
  }
  return (
    <div className="container w-screen h-screen p-20 ">
      <div className="main flex justify-center items-center w-full h-full">
        <div className="  border p-4 rounded-md flex  w-[420px] flex-col gap-8">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              value={name}
              className="animate__animated 
              animate__backInLeft bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 "
              placeholder="John"
              required
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-white text-sm font-medium "
            >
             Email
            </label>
            <input
              type="email"
              id="first_name"
              value={email}
              className="animate__animated 
              animate__backInRight bg-transparent border border-gray-300  text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="John@rcample.com"
              required
              onChange={(event)=>setEmail(event.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <input
  type="text"
  id="first_name"
  value={msg}
  className="animate__animated 
  animate__backInLeft bg-transparent border border-gray-300 text-top text-start text-white text-sm rounded-lg w-full p-2.5"
  placeholder="Message"
  required
  onChange={(event)=>setMsg(event.target.value)}
/>

          </div>
          <button type="submit" className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm border w-20 self-center px-5 py-2.5 text-center " onClick={sendEmail} >Submit</button>
        </div>
      </div>
    </div>
  );
}
