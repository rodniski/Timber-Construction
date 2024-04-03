import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY500H from "@/data/produtos/escavadeira/sy500h/sy500h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY500H} />
  );
}
export default ProductPage;