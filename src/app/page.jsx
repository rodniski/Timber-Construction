"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div>
          <h1 className="md:hidden pt-8 text-3xl font-bold">
            Excelência na <span class="text-red-700">Construção</span> <br />{" "}
            Inovação em <span class="text-red-700">Maquinário</span>.
          </h1>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/escavadeira/sy135c/1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
          {/* TITLE */}
          <h1 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold">
            Excelência na <span class="text-red-700">Construção</span> <br />{" "}
            Inovação em <span class="text-red-700">Maquinário</span>.
          </h1>
          {/* DESC */}
          <p className="text-base md:text-lg lg:text-xl px-2">
            Com dedicação à qualidade e domínio da tecnologia de construção,
            nosso portfólio destaca uma variedade de projetos de maquinário que
            incorporam nosso compromisso com o desempenho superior.
          </p>
          <div className="w-full flex gap-4">
            <motion.a
              href="/produtos"
              className="p-4 rounded-lg ring-2 ring-red-700 font-bold text-red-700 hover:bg-red-700 hover:text-white"
              whileHover={{ scale: 1.1 }}
            >
              Nossos Produtos
            </motion.a>

            <motion.button
              className="p-4 rounded-lg flex flex-row gap-1 font-bold hover:text-red-700 items-center"
              whileHover={{ x: 5 }}
            >
              Entre em contato
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                whileHover={{ x: 5 }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
