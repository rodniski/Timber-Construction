import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY155H from "@/data/produtos/escavadeira/sy155h/sy155h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY155H} />
  );
}
export default ProductPage;