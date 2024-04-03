import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY215LR from "@/data/produtos/escavadeira/sy215lr/sy215lr"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY215LR} />
  );
}
export default ProductPage;