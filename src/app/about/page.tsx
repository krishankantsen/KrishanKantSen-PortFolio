import Image from "next/image";
import img from "../assets/4bc703f3772b00c34cd1318426cfaa9bf746a8b5_high.webp";
import { language } from "./language";
import "animate.css"

export default function Page() {
  return (
    <div className="w-screen gap-8 sm:h-screen sm:gap-0 h-full flex-col flex font-sans sm:flex-row text-white">
      <div className="mt-14 w-full sm:w-[50%] sm:flex flex flex-col items-center justify-center  sm:p-20 gap-5">
        <Image src={img} alt="picture" className="w-48  h-48 rounded-lg self-center"></Image>
        <h1 className="text-4xl text-center animate__animated animate__backInLeft">Krishan Kant Sen</h1>
        <p className="text-xl text-center text-gray-500">
          Full Stack Developer
        </p>
        <p className="text-md text-center translate-x-5 animate__animated animate__backInUp">
          Address: Ganj Dinara, Shivpuri, M.P. 473665 <br />
          Phone: 8878724328 <br />
          Email: krishankantsen.bhumca22@gmail.com
        </p>
      </div>
      <div className="sm:w-[50%] gap-8 p-5 flex  flex-col items-center p-18 justify-center  sm:gap-5 ">
        <h1 className="text-4xl">Skills</h1>
        <div className="flex justify-center text-white flex-wrap gap-6 ">
          {language.map((lang) => (
            <div
              key={lang.name}
              className="flex flex-col border border-white  rounded-md text-center transform-all hover:scale-105 justify-center items-center gap-1 w-24 h-26 animate__animated animate__backInRight"
            >
              <h1>{lang.name}</h1>
            </div>
          ))}
        </div>
        <h1 className="text-4xl">Education</h1>
        <ul className="list-disc " >
          <li className="border rounded-lg p-2 animate__animated animate__backInRight">
          Banaras Hindu University &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;Nov. 2022 - Oct. 2024 <br />
          MCA&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; CGPA:8.15</li>
          <li className="border rounded-lg p-2 mt-2 animate__animated animate__backInRight">
          Banaras Hindu University &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;Jul. 2018 - May. 2021 <br />
          BSC (Cs) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Percentage:71.60</li>
        </ul>
        
        
      </div>
    </div>
  );
}
