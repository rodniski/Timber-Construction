import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY26U from "@/data/produtos/Mini-escavadeira/SY26U/SY26U"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY26U} />
  );
}
export default ProductPage;