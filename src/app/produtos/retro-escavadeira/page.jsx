"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-slate-200 to-slate-300",
    title: "Mini Escavadeiras",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/mini.png",
    link: "/produtos/mini-escavadeira",
  },
  {
    id: 2,
    color: "from-slate-300 to-slate-200",
    title: "Escavadeiras",
    img: "/escavadeira.png",
    link: "/produtos/escavadeira",
  },
  {
    id: 3,
    color: "from-slate-200 to-slate-300",
    title: "Pá Carregadeira",
    img: "/carregadeira.png",
    link: "/produtos/pa-carregadeira",
  },
  {
    id: 4,
    color: "from-slate-300 to-slate-200",
    title: "Retro Escavadeira",
    img: "/retro.png",
    link: "/produtos/retro-escavadeira",
  },
  {
    id: 5,
    color: "from-slate-200 to-slate-300",
    title: "Motoniveladora",
    img: "/niveladora.png",
    link: "/produtos/motoniveladora",
  },
  {
    id: 6,
    color: "from-slate-300 to-slate-200",
    title: "Rolo Compacador",
    img: "/compactador.png",
    link: "/produtos/motocompactador",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Nossas linhas de Produtos
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-red-700">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 lg:w-[500px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <Link
                    href={item.link}
                    className="flex justify-center align-center"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-red-700 text-slate-100 font-semibold m-4 rounded">
                      Ver Modelos
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Deseja falar conosco?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              Líder em equipamentos de construção
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contato"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contato
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
