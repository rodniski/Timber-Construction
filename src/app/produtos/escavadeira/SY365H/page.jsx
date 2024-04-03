import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY365H from "@/data/produtos/escavadeira/sy365h/sy365h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY365H} />
  );
}
export default ProductPage;