import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "WaysBeans",
    description:
      "Ways Beans is a coffee bean ordering application that makes it easy for coffee lovers to choose the best coffee beans",
    stack: "React.Js, Node.Js, Express.Js, MySQL.",
    image: "/portfolio1.png",
    github: "https://github.com/ambardws/Waysbeans-App",
  },
  {
    name: "Todo-List",
    description:
      "The todolist application is a mobile application that displays a list of tasks that must be done at a time.",
    stack: "React Native, Expo, Node.Js, Express.Js, MySQL.",
    image: "/portfolio2.png",
    github: "https://github.com/ambardws/TodoMobile-App",
  },
  {
    name: "Calculator",
    description:
      "Application Calculator mobile provides simple and advanced mathematical functions in a beautifully designed app.",
    stack: "React Native, Expo, Node.Js, Express.Js, MySQL.",
    image: "/portfolio3.png",
    github: "https://github.com/ambardws/Calc-App",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl loading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
