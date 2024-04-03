import React from "react";
import Product from "@/Components/produtos/product"; // Importando o Componente ProductPage
import SKT90S from "@/data/produtos/caminhao/skt90s"; // Importando as informações específicas do produto SKT90S
function ProductPage() {
  return (
    <Product product={SKT90S} />
  );
}
export default ProductPage;
