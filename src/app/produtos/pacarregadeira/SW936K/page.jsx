import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SW936K from "@/data/produtos/pacarregadeira/sw936k/sw936k"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SW936K} />
  );
}
export default ProductPage;