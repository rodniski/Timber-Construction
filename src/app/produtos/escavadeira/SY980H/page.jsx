import React from "react";
import ProductPage from "@components/comum/ProductPage"; // Importando o componente ProductPage
import SY980H from "../caminho/para/SY980H"; // Importando as informações específicas do produto SY980H

function SY980HPage() {
  return (
    <ProductPage product={SY980H} />
  );
}

export default SY980HPage;