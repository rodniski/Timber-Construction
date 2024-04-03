import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SW936K from "@/data/produtos/pacarregadeira/sw936k/sw936k"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SW936K} />
  );
}
export default ProductPage;