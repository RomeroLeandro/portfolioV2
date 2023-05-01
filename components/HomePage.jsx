import React from "react";
import fotoHome from "../public/assets/fotoHome.jpg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="inicio" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full px-8 py-16 flex flex-col justify-around items-center">
        <div className="w-80 h-52 mx-auto overflow-hidden rounded-xl">
          <Image src={fotoHome} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-gray-700 text-6xl">
          desarrollador front end
        </h1>

        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
        Tengo mas de 1 año de experiencia construyendo y diseñando software. Actualmente, me encanta trabajar en aplicaciones web utilizando tecnologías como React, Next JS, Tailwind y Bootstrap.
        </p>

        <Link href="/#sobre-mi">
          <div className="group flex items-center justify-center my-8 bg-violet-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            saber mas
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
