import Link from "next/link"
import React from "react"

import { MdExpandMore } from "react-icons/md"

const Me = () => {
  return (
    <div id="sobre-mi" className="w-full mx-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-violet-500 font-bold">
          sobre mi
        </h2>

        <div className="shadow-xl shadow-violet-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            Soy Leandro Romero, desarrollador front-end con experiencia en tecnologías web modernas. Me especializo en el uso de React y Next.js, dos de las principales herramientas de desarrollo de aplicaciones web del mercado, lo que me permite crear aplicaciones web escalables y eficientes. Además, disfruto utilizando Bootstrap o tailwind de forma efectiva para crear diseños atractivos y responsivos.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Tengo una gran pasión por el desarrollo web y he trabajado en varios proyectos desafiantes, logrando completarlos con éxito. Tengo un enfoque metódico en la resolución de problemas, lo que me permite encontrar soluciones efectivas y eficientes para cualquier desafío técnico que se presente.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Siempre estoy comprometido con mi trabajo, buscando nuevas formas de mejorar mis habilidades y mantenerme actualizado en las últimas tendencias del mercado. Soy un verdadero apasionado por el desarrollo de aplicaciones web y me esfuerzo por entregar siempre un trabajo de alta calidad.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="../public/assets/CurriculumVitae-RomeroLeandro.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              descargar cv
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </a>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              mi portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
