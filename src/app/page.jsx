"use client";

import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/site/banner.mp4" type="video/mp4" />
      </video>
      <div className="absolute backdrop-blur-xl bg-slate-700 bg-opacity-40 w-1/2 h-[24rem] rounded-2xl flex flex-col items-center justify-center shadow-lg">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Excelência na <span className="underline decoration-red-600	">Construção</span> <br />{" "}
          <span className="underline decoration-red-600">Inovação</span> em Maquinário.
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl px-2 mb-8 text-center">
          Com dedicação à qualidade e domínio da tecnologia de construção,
          nosso portfólio destaca uma variedade de projetos de maquinário que
          incorporam nosso compromisso com o desempenho superior.
        </p>
        <div className="flex gap-4">
          <a
            href="/produtos"
            className="p-4 rounded-lg ring-2 ring-white font-bold text-white hover:ring-red-700 hover:bg-red-700 hover:text-white"
          >
            Nossos Produtos
          </a>

          <button className="p-4 rounded-lg flex flex-row gap-1 font-bold text-white hover:text-red-700 hover:ring-red-700 items-center">
            Entre em contato
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
