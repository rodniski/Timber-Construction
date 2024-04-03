import React from "react";
import Categorias from "@/components/categorias";
import productsData from "@/data/productsData";

export default function EscavadeiraPage() {
  // Acessando os produtos da Retro Escavadeira
  const category = "Escavadeira";
  const EscavadeiraCategoryData = productsData[category];
  const EscavadeiraProducts = EscavadeiraCategoryData.products;
  return (
    <Categorias
      category={category}
      products={EscavadeiraProducts}
    />
  );
}
