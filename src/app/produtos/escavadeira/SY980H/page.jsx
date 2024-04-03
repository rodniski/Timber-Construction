import React from "react";
import Product from "@/Components/produtos/product";  // Importando o Componente ProductPage
import SY980H from "@/data/produtos/escavadeira/sy980h/sy980h"; // Importando as informações específicas do produto SY980H
function ProductPage() {
  return (
    <Product product={SY980H} />
  );
}

export default ProductPage;
