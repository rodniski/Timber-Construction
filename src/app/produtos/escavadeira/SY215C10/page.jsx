import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY215C10 from "@/data/produtos/escavadeira/sy215c10/sy215c10"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY215C10} />
  );
}
export default ProductPage;