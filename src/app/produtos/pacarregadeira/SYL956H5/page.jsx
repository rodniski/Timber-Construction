import React from "react";
import Product from "@/components/produtos/product"; // Importando o componente ProductPage
import SYL956H5 from "@/data/produtos/pacarregadeira/syl956h5/syl956h5"; // Importando as informações específicas do produto SY135C
function ProductPage() {
  return (
    <Product product={SYL956H5} />
  );
}
export default ProductPage;