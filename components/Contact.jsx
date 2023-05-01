import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contacto" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-violet-500 font-bold text-left">
          contacto
        </h2>

        <div className="flex flex-col  gap-8 shadow-xl shadow-violet-300 bg-white mt-4">
          <div className="w-full  h-full rounded-xl p-4">
            <p className="pt-2 pb-8">
            Estoy abierto a hablar sobre oportunidades de trabajo independiente o de tiempo completo. No dudes en ponerte en contacto conmigo utilizando tu medio preferido.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-violet-300 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-violet-300 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaInstagram size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-violet-300 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-violet-300 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaGithub size={25} />
              </div>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
