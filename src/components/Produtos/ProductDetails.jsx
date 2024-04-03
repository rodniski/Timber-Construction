"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importe useInView

function ProductDetails({ product }) {
  const { dev, name } = product;
  const [ref, inView] = useInView(); // Use o hook useInView para detectar a visibilidade do componente

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

  return (
    <div
      className="flex pt-12 justify-between items-center pt-0 pb-2 px-6 bg-slate-100 rounded-lg"
      ref={ref}
    >
      {/* Imagem (md:) */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <img
          src={dev.image}
          alt={`Imagem destacada do ${name}`}
          className="-ml-96 w-[1750px] hidden lg:block object-cover min-h-auto max-h-screen rounded-2xl"
        />
      </motion.div>

      {/* Detalhes do desenvolvimento */}
      <motion.div
        className="w-auto lg:w-[750px] lg:-ml-60"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        <div className="mb-8">
          <motion.h3
            className="text-red-600 text-lg font-bold"
            variants={itemVariants}
          >
            {name}
          </motion.h3>
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {dev.titulo}
          </motion.h1>
          <motion.p className="text-base  text-gray-700" variants={itemVariants}>
            {dev.segDesc}
          </motion.p>
          {/* Imagem sm:*/}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <img
              src={dev.image}
              alt={`Imagem destacada do ${name}`}
              className="block lg:hidden mt-6 justify-center object-cover min-h-auto max-h-96 w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div variants={itemVariants}>
          {/* Acessando os highlights diretamente pelo objeto dev.High */}
          <div className="flex items-center mb-4">
            <img
              src={dev.High.High1.image}
              alt="Highlight icon"
              className="mr-2"
            />
            <div>
              <h4 className="text-black font-semibold text-lg">
                {dev.High.High1.title}
              </h4>
              <p className="text-base text-gray-700">{dev.High.High1.desc}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src={dev.High.High2.image}
              alt="Highlight icon"
              className=" mr-2"
            />
            <div>
              <h4 className="text-black font-semibold text-lg">
                {dev.High.High2.title}
              </h4>
              <p className="text-base text-gray-700">{dev.High.High2.desc}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src={dev.High.High3.image}
              alt="Highlight icon"
              className=" mr-2"
            />
            <div>
              <h4 className="text-black font-semibold text-lg">
                {dev.High.High3.title}
              </h4>
              <p className="text-base text-gray-700">{dev.High.High3.desc}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProductDetails;
