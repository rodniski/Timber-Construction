import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY215H from "@/data/produtos/escavadeira/sy215h/sy215h"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY215H} />
  );
}
export default ProductPage;