import React from "react";
import Product from "@/components/produtos/product"; // Importando o componente ProductPage
import SY750H from "@/data/produtos/escavadeira/sy750h/sy750h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY750H} />
  );
}
export default ProductPage;