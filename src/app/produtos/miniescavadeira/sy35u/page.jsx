import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY35U from "@/data/produtos/Mini-escavadeira/SY35U/SY35U"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY35U} />
  );
}
export default ProductPage;