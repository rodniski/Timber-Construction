import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import STG190C8 from "@/data/produtos/motoniveladora/stg190c8"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={STG190C8} />
  );
}
export default ProductPage;
