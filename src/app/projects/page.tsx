import Link from "next/link";
import { projects } from "./projects";
export default function Projects() {
  return (
    <div className="w-screen text-white h-auto p-10 gap-3 flex flex-col">
      <h1 className="text-center text-4xl ">Projects</h1>
      <div className="w-full h-full flex flex-wrap gap-8 justify-center ">
        {projects.map((project) => (
          <div key={project.name} className="max-w-96 h-auto p-6  border border-gray-200 rounded-lg shadow animate__animated
          animate__backInLeft hover:scale-105 hover:shadow-md
          shadow-white hover:shadow-white dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  ">
              {project.name}
            </h5>

            <p className="mb-3 font-normal dark:text-gray-400">
              {project.des}
            </p>
            <p className="mb-3  dark:text-gray-400 font-bold" >Tech:{project.tech}</p>
            <a
              href={project.link}
              className="inline-flex items-center px-3 py-2 text-sm border border-gray-200 font-medium text-center text-white  rounded-lg"
            >
              Open
            </a>
          </div>
        ))}
      </div>
      <Link href="" className="text-center text-2xl underline ">For More Click here</Link>
    </div>
  );
}
