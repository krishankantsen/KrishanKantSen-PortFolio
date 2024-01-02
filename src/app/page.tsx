import { Code, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import "animate.css"
export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen sm:h-screen font-sans">
      <div className="font-sans flex flex-col h-screen items-center w-screen text-white justify-center">
        <h1 className="text-3xl sm:text-6xl text-center font-bold animate__animated animate__backInLeft">
          Hi, I am Krishan Kant Sen
        </h1>
        <p className="text-lg sm:text-2xl text-gray-500 animate__animated animate__bounceInRight">
          Full Stack Developer
        </p>
        <Link href="https://drive.google.com/file/d/1XtWnLGxD5QLi1cPiSHk1xo1q-zICS6j5/view?usp=sharing"  target="_blank" ><button className="rounded-lg mt-2  p-2 shadow-md text-white ounded-sm border-white border-2">
          Resume
        </button></Link>
      </div>
      <div className="w-screen text-gray-500   h-18 flex justify-around items-center">
        <Link
          href="https://www.linkedin.com/in/krishan-kant-sen-506333260/"
          className="text-bold sm:text-2xl flex-col flex items-center "
          target="_blank"
        >
          <Linkedin className="animate__animated animate__backInUp" />
          LinkeDin
        </Link>
        <Link
          href="https://github.com/krishankantsen"
          className="text-bold flex-col flex items-center sm:text-2xl"
          target="_blank"
        >
          <Github className="animate__animated animate__bounceInUp" /> GitHub
        </Link>
        <Link
          href="https://twitter.com/KrishanKantSen5"
          className="flex-col flex items-center text-bold sm:text-2xl"
          target="_blank"
        >
          <Twitter className="animate__animated animate__bounceInUp"  />
          Twitter
        </Link>
        <Link
          href="https://leetcode.com/Krishan36/"
          className="flex-col flex items-center text-bold sm:text-2xl"
          target="_blank"
        >
          <Code className="animate__animated animate__bounceInUp" />
          LeetCode
        </Link>
      </div>
    </div>
  );
}
