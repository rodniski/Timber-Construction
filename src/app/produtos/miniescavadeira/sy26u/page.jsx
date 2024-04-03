import React from "react";
import Product from "@/components/produtos/product"; // Importando o componente ProductPage
import SY26U from "@/data/produtos/miniescavadeira/sy26u/SY26U"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY26U} />
  );
}
export default ProductPage;