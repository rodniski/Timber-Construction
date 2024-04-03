import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY245H from "@/data/produtos/escavadeira/sy245h/sy245h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY245H} />
  );
}
export default ProductPage;