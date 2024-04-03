import React from "react";
import Product from "@/components/produtos/product"; // Importando o componente ProductPage
import SKT90S from "@/data/produtos/caminhao/skt90s"; // Importando as informações específicas do produto SKT90S
function ProductPage() {
  return (
    <Product product={SKT90S} />
  );
}
export default ProductPage;
