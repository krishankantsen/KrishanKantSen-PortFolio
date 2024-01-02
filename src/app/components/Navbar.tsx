'use client'
import  {Menu, XSquare}  from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isshow, setIsshow] = useState(false);

  return (
    <div className="fixed top-0 w-full flex justify-between p-2 font-sans items-center h-14 animate__animated animate__bounceInDown text-white text-base sm:text-xl z-1000 sm:justify-around">
      <Link href="/"><h1 className="font-bold"> &lt;/Krishan Kant Sen&gt;</h1></Link>
      <ul className="hidden sm:flex items-center">
     
        <Link href="/">
          <li className="ml-10 hover:scale-125">Home</li>
        </Link>
        <Link href="/about">
          <li className="ml-10 hover:scale-125">About</li>
        </Link>
        <Link href="/projects">
          <li className="ml-10 hover:scale-125">Projects</li>
        </Link>
        <Link href="/contact">
          <li className=" ml-10 rounded-sm border-white border-2 p-1">ContactMe</li>
        </Link>
      </ul>
      <div className="block sm:hidden">
      {isshow?<XSquare onClick={()=> setIsshow(false)} className="cursor-pointer hover:scale-125"/>:<Menu onClick={()=> setIsshow(true)} className="cursor-pointer hover:scale-125" />}
        {isshow ? (
            
          <ul className="flex-col border p-2 mt-2 rounded-lg ml-[-75px] mr-32 absolute">
            <Link href="/" >
              <li onClick={()=> setIsshow(false)}className="hover:scale-125">Home</li>
            </Link>
            <Link href="/about">
              <li onClick={()=> setIsshow(false)}className="hover:scale-125">About</li>
            </Link>
            <Link href="/projects">
              <li onClick={()=> setIsshow(false)}className="hover:scale-125"> Projects</li>
            </Link>
            <Link href="/contact">
              <li onClick={()=> setIsshow(false)}className="hover:scale-125">ContactMe</li>
            </Link>
             
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
