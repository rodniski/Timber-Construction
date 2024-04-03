import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SY75C from "@/data/produtos/miniescavadeira/sy75c/SY75C"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SY75C} />
  );
}
export default ProductPage;