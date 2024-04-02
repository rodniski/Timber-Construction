import React from "react";
import Categorias from "@/components/Categorias";
import productsData from "@/data/productsData";

export default function MiniEscavadeiraPage() {
  // Acessando os produtos da Retro Escavadeira
  const category = "Mini Escavadeira";
  const MiniEscavadeiraCategoryData = productsData[category];
  const MiniEscavadeiraProducts = MiniEscavadeiraCategoryData.products;
  return (
    <Categorias
      category={category}
      products={MiniEscavadeiraProducts}
    />
  );
}
