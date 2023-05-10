import React from "react"

import { MdExpandMore } from "react-icons/md"

import portfoliov1 from "../public/assets/portfolio/portfoliov1.PNG"
import romeroDesing from "../public/assets/portfolio/romeroDesing.PNG"
import dixerGaming from "../public/assets/portfolio/dixerGaming.PNG"
import bairesTrips from "../public/assets/portfolio/bairesTrips.PNG"
import portfoliov2 from "../public/assets/portfolio/portfoliov2.PNG"
import Link from "next/link"
import Image from "next/image"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "portfolio v1",
      imageSrc: portfoliov1,
      url: "portfolio-v1",
    },
    {
      id: 2,
      title: "romero desing",
      imageSrc: romeroDesing,
      url: "romero-desing",
    },
    {
      id: 3,
      title: "dixer gaming",
      imageSrc: dixerGaming,
      url: "dixer-gaming",
    },
    {
      id: 4,
      title: "baires trips",
      imageSrc: bairesTrips,
      url: "baires-trips",
    },
    {
      id: 5,
      title: "portfolio v2",
      imageSrc: portfoliov2,
      url: "portfolio-v2",
    },
  ];

  return (
    <div id="portfolio" className="w-full mx-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-violet-500 font-bold">
          portfolio
        </h2>
        <p className="py-4 max-w-max">
          He trabajado en una variedad de proyectos, a través de ellos, he demostrado habilidades valiosas en la planificación, desarrollo y lanzamiento de soluciones web. Cada proyecto ha sido construido cuidadosamente, tomando en cuenta los requerimientos y necesidades. He implementado soluciones personalizadas y escalables, creando aplicaciones web.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-violet-300 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:font-bold">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              todos los proyectos
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
