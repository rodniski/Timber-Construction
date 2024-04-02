import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY16C from "@/data/produtos/Mini-escavadeira/SY16C/SY16C"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY16C} />
  );
}
export default ProductPage;