'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ProductHero({ product }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring", // ou o tipo de transição desejado
        stiffness: 100, // ou a rigidez desejada
      },
    },
  };

  const staggerDelay = 0.1; // Ajuste o atraso de cada item

  return (
    <div className="flex h-screen flex-wrap items-center justify-between py-4 px-6 bg-slate-100 rounded-lg">
      {/* Conteúdo da esquerda */}
      <div className="w-full md:w-1/2 lg:w-2/5 -mt-24 mb-6 md:mb-0">
        {/* Categoria */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl uppercase font-bold"
        >
          {product.categoria}
        </motion.h2>
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold text-red-600 mb-8"
        >
          {product.name}
        </motion.h1>
        {/* Descrição do produto */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="font-medium text-xl text-gray-800 mb-4"
        >
          {product.desc}
        </motion.p>
        {/* Em estoque */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center mb-4"
        >
          <img
            src="/svgs/check.svg"
            alt="Check icon"
            className="w-[30px] mr-2 text-black"
          />
          <p className="text-sm text-gray-600">Em estoque e a pronta entrega</p>
        </motion.div>
        {/* Destaques */}
        <ul className="mt-8">
          {Object.values(product.features).map((highlight, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 + staggerDelay * index }} // Ajuste o atraso
              className="flex items-center mb-4"
            >
              <img
                src={highlight.image}
                alt="Highlight icon"
                className="mr-2"
              />
              <div>
                <p className="text-black font-medium text-lg">{highlight.descrição}</p>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        {/* Botão de fazer orçamento */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="bg-red-600 hover:bg-red-500 text-white font-medium py-[10px] px-[182px] rounded-lg text-lg"
        >
          <a href="#form">Fazer Orçamento</a>
        </motion.button>
      </div>
      {/* Imagem */}
      <div className="w-full -mt-24 md:w-1/2 lg:w-3/5">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          src={product.image}
          alt={`Imagem do ${product.name}`}
          className="w-full rounded-3xl"
        />
      </div>
    </div>
  );
}

export default ProductHero;
