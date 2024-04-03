"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm"; // Importe o Componente ContactForm aqui

const ProductFooter = ({ specs }) => {
  const [activeTab, setActiveTab] = useState("Motor");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-slate-100 h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                Ficha Técnica
              </h2>
              <div className="flex space-x-4">
                {Object.keys(specs).map((section) => (
                  <button
                    key={section}
                    className={`flex items-center px-4 py-2 text-sm font-medium focus:outline-none ${
                      activeTab === section
                        ? "text-amber-500 border-b-2 border-amber-600"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleTabClick(section)}
                  >
                    <image
                      src={specs[section].image}
                      alt={section}
                      className={`w-6 h-6 mr-2 ${
                        activeTab === section
                          ? "text-amber-500"
                          : "text-gray-700"
                      }`}
                    />
                    {specs[section].titulo}
                  </button>
                ))}
              </div>
            </div>
            <div>
              {/* Renderizar o conteúdo da aba ativa */}
              <dl className="space-y-4">
                {Object.entries(specs[activeTab].data).map(([key, value]) => (
                  <div key={key} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-500">{key}</dt>
                    <dd className="mt-1 text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Entre em Contato
            </h2>
            {/* Inclua o formulário de contato aqui */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
