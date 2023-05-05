import React from "react"
import portfoliov1 from "../../public/assets/portfolio/portfoliov1.PNG"
import romeroDesing from "../../public/assets/portfolio/romeroDesing.PNG"
import dixerGaming from "../../public/assets/portfolio/dixerGaming.PNG"
import bairesTrips from "../../public/assets/portfolio/bairesTrips.PNG"
import portfoliov2 from "../../public/assets/portfolio/portfoliov2.PNG"

import { FaGithub } from "react-icons/fa"
import { AiOutlineCaretRight } from "react-icons/ai"
import { BiChevronLeft } from "react-icons/bi"
import Link from "next/link"
import Image from "next/image"
import { MdExpandMore } from "react-icons/md"

const portfolios = [
  {
    id: 1,
    title: "portfolio v1",
    imageSrc: portfoliov1,
    url: "portfolio-v1",
    urlGitub: "https://github.com/RomeroLeandro/PortfolioV1",
    description:
      "He trabajado en la creación de mi portfolio personal utilizando HTML, CSS, JavaScript y SCSS. Cuenta con una página de inicio atractiva, secciones para mostrar mis proyectos anteriores, habilidades y una página de contacto. El uso de SCSS me ha permitido escribir estilos avanzados y reutilizables, lo que ha facilitado la mantención del proyecto a largo plazo. Mi objetivo ha sido crear una página web profesional que muestre mis habilidades y experiencia en el desarrollo web, y que pueda ser utilizada para mostrar a posibles empleadores o clientes.",
    urlDeploy: "https://portfolioleandroromero.vercel.app/",
  },
  {
    id: 2,
    title: "romero desing",
    imageSrc: romeroDesing,
    url: "romero-desing",
    urlGitub: "https://github.com/RomeroLeandro/RomeroDesing-ecommerce",
    description:
      "Este proyecto de ecommerce fue creado con el objetivo de ofrecer una experiencia de compra en línea fácil y fluida para los usuarios. Desde el diseño de la interfaz de usuario hasta el manejo del inventario, se utilizaron herramientas como HTML, CSS y JavaScript para crear una experiencia de compra intuitiva y sin complicaciones para los clientes.",
    urlDeploy: "https://romero-desing.vercel.app/",
  },
  {
    id: 3,
    title: "dixer gaming",
    imageSrc: dixerGaming,
    url: "dixer-gaming",
    urlGitub: "https://github.com/RomeroLeandro/Dixer-gaming-ecommerce",
    description:
      "Este proyecto de eCommerce fue creado con React y Redux para el manejo de estado. Se utilizó Firebase el almacenamiento de datos. Los usuarios pueden navegar fácilmente por los productos y filtrarlos según sus preferencias. El sitio web también cuenta con un carrito de compras funcional que permite a los usuarios agregar y eliminar productos. El diseño fue creado con CSS.",
    urlDeploy: "https://dixer-gaming.vercel.app/",
  },
  {
    id: 4,
    title: "baires trips",
    imageSrc: bairesTrips,
    url: "baires-trips",
    urlGitub: "https://github.com/RomeroLeandro/baires-trips-calculadora",
    description:
      "El proyecto de la calculadora de costos es una aplicación web que permite a los usuarios calcular el costo de un viaje en función de sus requisitos. Fue desarrollado utilizando HTML, CSS y JavaScript, y presenta una interfaz de usuario intuitiva y fácil de usar. La aplicación toma los datos ingresados por el usuario, los procesa y presenta el costo total del viaje. La aplicación es altamente escalable y se puede adaptar fácilmente a diferentes tipos de proyectos y requisitos.",
    urlDeploy: "https://baires-trips.vercel.app/",
  },
  {
    id: 5,
    title: "portfolio v2",
    imageSrc: portfoliov2,
    url: "portfolio-v2",
    urlGitub: "https://github.com/RomeroLeandro/portfolioV2",
    description:
      "Este es un proyecto de portfolio personal que desarrollé utilizando React, Next.js y Tailwind CSS. Utilicé Next.js para hacer que el sitio web sea rápido y escalable, y Tailwind CSS para una fácil personalización del estilo. Además, agregué interacciones y animaciones para mejorar la experiencia del usuario. Con este proyecto, pude demostrar mi capacidad para crear un sitio web moderno y profesional utilizando las últimas tecnologías de desarrollo web.",
    urlDeploy: "https://romeroleandrodeveloper.vercel.app/",
  },

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

        <div className="relative w-1/2 h-80 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Descripcion
        </h2>

        <p>{description}</p>

        <div className="flex items-center justify-center gap-10">
          <a href={urlDeploy} target="blank" rel="noopener noreferrer">
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              deploy
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={18} />
              </span>
            </div>
          </a>

          <a href={urlGitub} target="_blank" rel="noopener noreferrer">
            <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              repositorio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
