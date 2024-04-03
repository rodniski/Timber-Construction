import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY55C from "@/data/produtos/miniescavadeira/sy55c/SY55C"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY55C} />
  );
}
export default ProductPage;