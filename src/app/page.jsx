"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero-sany.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Excelência na <span class="text-red-700">Construção</span> <br/> Inovação em <span class="text-red-700">Maquinário</span>.
          </h1>
          {/* DESC */}
          <p className="md:text-xl ">
            Com dedicação à qualidade e domínio da tecnologia de construção,
            nosso portfólio destaca uma variedade de projetos de maquinário que
            incorporam nosso compromisso com o desempenho superior.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-2 ring-red-700 font-bold text-red-700 hover:bg-red-700 hover:text-white">
              Nossos Produtos
            </button>
            <button className="p-4 rounded-lg flex flex-column gap-1 font-bold hover:text-red-700 ">
              Entre em contato
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
