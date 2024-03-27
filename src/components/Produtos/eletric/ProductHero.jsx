
import React from "react";

function ProductHero({ product }) {
  

  return (
    <div className="flex h-screen flex-wrap items-center justify-between py-4 px-6 bg-slate-100 rounded-lg">
      {/* Conteúdo da esquerda */}
      <div className="w-full md:w-1/2 lg:w-2/5 -mt-24 mb-6 md:mb-0">
        {/* Breadcrumbs */}
        <h2 className="text-xl uppercase font-bold">{product.categoria}</h2>
        {/* Título */}
        <h1 className="text-6xl font-bold text-indigo-600 mb-8">
          {product.name}
        </h1>
        {/* Descrição do produto */}
        <p className="font-medium text-xl text-gray-800 mb-4">{product.desc}</p>
        {/* Em estoque */}
        <div className="flex items-center mb-4">
          <img
            src="/svgs/check.svg"
            alt="Check icon"
            className="w-[30px] mr-2 text-black"
          />
          <p className="text-sm text-gray-600">Em estoque e a pronta entrega</p>
        </div>
        <div className="mt-8 flex flex-col justify-between">
          {/* Destaques */}
          {Object.values(product.features).map((highlight, index) => (
            <div key={index} className="flex items-center mb-4">
              <img
                src={highlight.image}
                alt="Highlight icon"
                className="mr-2"
              />
              <p className="text-black font-medium text-lg">
                {highlight.descrição}
              </p>
            </div>
          ))}
        </div>
        {/* Botão de fazer orçamento */}
        <button
          
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-[10px] px-[182px] rounded-lg text-lg"
        >
          <a href="#form">Fazer Orçamento</a>
        </button>
      </div>
      {/* Imagem */}
      <div className="w-full -mt-24 md:w-1/2 lg:w-3/5">
        <img
          src={product.image}
          alt={`Imagem do ${product.name}`}
          className="w-full rounded-3xl"
        />
      </div>
    </div>
  );
}

export default ProductHero;
