import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "sobre-mi",
    },
    {
      id: 5,
      link: "contacto",
    },
  ];

  return (
    <nav
    className={`w-full h-15 z-10 fixed duration-300 ease-in ${
      scroll ? "bg-violet-500 text-[#fff]" : "bg-white text-black"
    }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#inicio">
          <h1 className="text-3xl lg:text-2xl font-bold uppercase tracking-wider cursor-pointer">
            leandro romero
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-xs uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-violet-500 to-violet-700 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  leandro romero
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaFacebook size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaGithub size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
