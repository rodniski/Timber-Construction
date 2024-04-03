"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactForm from "@components/ContactForm"; // Importe o componente ContactForm aqui

const ContactPage = () => {
  const text = "Diga Olá";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* FORM CONTAINER */}
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
