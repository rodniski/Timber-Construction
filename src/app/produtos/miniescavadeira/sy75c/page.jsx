import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY75C from "@/data/produtos/Mini-escavadeira/sy75c/sy75c"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY75C} />
  );
}
export default ProductPage;