import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SW956E from "@/data/produtos/Pa-carregadeira/SW956E/SW956E"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SW956E} />
  );
}
export default ProductPage;