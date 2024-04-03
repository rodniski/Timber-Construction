import React from "react";

function ProductDetails({ product }) {
  const { dev, name } = product;

  return (
    <div className="flex pt-12 justify-between items-center py-4 px-6 bg-slate-100 rounded-lg">
      {/* Imagem */}
      <div className="">
        <img
          src={dev.image}
          alt={`Imagem destacada do ${name}`}
          className="-ml-96 w-[1750px] rounded-2xl"
        />
      </div>

      {/* Detalhes do desenvolvimento */}
      <div className="w-[800px] -ml-24">
        <div className="mb-8">
          <h3 className="text-indigo-600 text-lg font-bold">{name}</h3>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{dev.titulo}</h1>
          <p className="text-base text-gray-700">{dev.segDesc}</p>
        </div>

        {/* Highlights */}
        <div>
          {/* Acessando os highlights diretamente pelo objeto dev.High */}
          <div className="flex items-center mb-4">
            <img src={dev.High.High1.image} alt="Highlight icon" className="mr-2" />
            <div>
              <h4 className="text-black font-semibold text-lg">{dev.High.High1.title}</h4>
              <p className="text-base text-gray-700">{dev.High.High1.desc}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img src={dev.High.High2.image} alt="Highlight icon" className=" mr-2" />
            <div>
              <h4 className="text-black font-semibold text-lg">{dev.High.High2.title}</h4>
              <p className="text-base text-gray-700">{dev.High.High2.desc}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img src={dev.High.High3.image} alt="Highlight icon" className=" mr-2" />
            <div>
              <h4 className="text-black font-semibold text-lg">{dev.High.High3.title}</h4>
              <p className="text-base text-gray-700">{dev.High.High3.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
