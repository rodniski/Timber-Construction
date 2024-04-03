import React from "react";
import Product from "@components/Produtos/Product"; // Importando o componente ProductPage
import SY155H from "@/data/produtos/escavadeira/sy155h/sy155h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY155H} />
  );
}
export default ProductPage;