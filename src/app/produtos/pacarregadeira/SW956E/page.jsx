import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SW956E from "@/data/produtos/pacarregadeira/sw956e/sw956E"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SW956E} />
  );
}
export default ProductPage;