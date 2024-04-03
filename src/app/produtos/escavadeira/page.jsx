import React from "react";
import Categorias from "@/components/Categorias";
import productsData from "@/data/productsData";

export default function escavadeiraPage() {
  // Acessando os produtos da Retro Escavadeira
  const category = "Escavadeira";
  const escavadeiraCategoryData = productsData[category];
  const escavadeiraProducts = escavadeiraCategoryData.products;
  return (
    <Categorias 
      category={category}
      products={escavadeiraProducts}
    />
  );
}
