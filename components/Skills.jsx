import React from "react";

import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import reactImage from "../public/assets/skills/react.png";
import nextjs from "../public/assets/skills/nextjs.png";
import tailwind from "../public/assets/skills/tailwind.png";
import bootstrap from "../public/assets/skills/bootstrap.png";
import node from "../public/assets/skills/node.png";
import angular from "../public/assets/skills/angular.png";
import git from "../public/assets/skills/git.png";
import github from "../public/assets/skills/github.png";
import sass from "../public/assets/skills/sass.png";
import Image from "next/image";

const Skills = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      src: javascript,
      
      
      
    },
    {
      id: 4,
      title: "REACT",
      src: reactImage,
      
    },
    {
      id: 5,
      title: "NEXT JS",
      src: nextjs,
      
    },
    {
      id: 6,
      title: "ANGULAR",
      src: angular,
      
      
    },
    {
      id: 7,
      title: "TAILWIND",
      src: tailwind,
    },
    {
      id: 8,
      title: "BOOTSTRAP",
      src: bootstrap,
      
    },
    {
      id: 9,
      title: "SASS",
      src: sass,
      
      
      
    },
    ,
    {
      id: 10,
      title: "GIT",
      src: git,
      
      
    }
    ,
    {
      id: 11,
      title: "GITHUB",
      src: github,
      
    },
    {
      id: 12,
      title: "NODE JS",
      src: node,
      
    }
  ];

  return (
    <div id="skills" className="w-full mx-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-violet-500 font-bold">
          skills
        </h2>
        <p className="py-4 max-w-max">
        Trabajo con un conjunto de herramientas y tecnologías para construir aplicaciones web altamente eficientes, escalables y visualmente atractivas.
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              shadow-violet-300"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
