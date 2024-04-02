import React from "react";
import CategoryProducts from "@/components/CategoryProducts";
import productsData from "@/components/productsData";

export default function paCarregadeiraPage() {
  // Acessando os produtos da Retro Escavadeira
  const category = "Pá Carregadeira";
  const paCarregadeiraCategoryData = productsData[category];
  const paCarregadeiraProducts = paCarregadeiraCategoryData.products;
  return (
    <CategoryProducts
      category={category}
      products={paCarregadeiraProducts}
    />
  );
}
