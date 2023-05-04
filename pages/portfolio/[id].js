import React from "react";
import portfoliov1 from "../../public/assets/portfolio/portfoliov1.PNG";
import romeroDesing from "../../public/assets/portfolio/romeroDesing.PNG";
import dixerGaming from "../../public/assets/portfolio/dixerGaming.PNG";
import bairesTrips from "../../public/assets/portfolio/bairesTrips.PNG";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";

const portfolios = [
  {
    id: 1,
    title: "portfolio v1",
    imageSrc: portfoliov1,
    url: "portfolio-v1",
    urlGitub: "https://github.com/RomeroLeandro/PortfolioV1",
    description: "",
    urlDeploy: "",
  },
  {
    id: 2,
    title: "romero desing",
    imageSrc: romeroDesing,
    url: "romero-desing",
    urlGitub: "https://github.com/RomeroLeandro/RomeroDesing-ecommerce",
    description: "",
    urlDeploy: "",
  },
  {
    id: 3,
    title: "dixer gaming",
    imageSrc: dixerGaming,
    url: "dixer-gaming",
    urlGitub: "https://github.com/RomeroLeandro/Dixer-gaming-ecommerce",
    description: "",
    urlDeploy: "",
  },
  {
    id: 4,
    title: "baires trips",
    imageSrc: bairesTrips,
    url: "baires-trips",
    urlGitub: "https://github.com/RomeroLeandro/simuladorCostos",
    description: "holaaaaaaaaaaaaaaaaaaaa",
    urlDeploy: "",
  }
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({
  portfolio: { title, imageSrc, urlGitub, description, urlDeploy },
}) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/#portfolio">
            <div className="flex items-center justify-center my-8 text-violet-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> volver
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-violet-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Descripcion
        </h2>

        <p>{description}</p>

        <div className="flex items-center justify-center gap-10">
          <Link href={urlDeploy}>
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={18} />
              </span>
            </div>
          </Link>

          <Link href={urlGitub} target="_blank">
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              repositorio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
