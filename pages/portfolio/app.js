import React from "react";
import portfoliov1 from "../../public/assets/portfolio/portfoliov1.PNG";
import romeroDesing from "../../public/assets/portfolio/romeroDesing.PNG";
import dixerGaming from "../../public/assets/portfolio/dixerGaming.PNG";
import bairesTrips from "../../public/assets/portfolio/bairesTrips.PNG";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-violet-500 font-bold pb-16">
          portfolio
        </h2>

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
      </div>
    </div>
  );
};

export default PortfoliosRoute;
