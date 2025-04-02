import { useState } from "react";
import Buttons from "../ui/Buttons";
import Inputs from "../ui/Inputs";
import { CreateProducts } from "../services/products/Product";
import { UseProductContext } from "../contexts/ProductContext";

function Inventory() {
  const [productName, setProductName] = useState();
  const [productType, setProductType] = useState();
  const { products } = UseProductContext();
  console.log(products);

  return (
    <div className="flex flex-col items-center bg-blue-300 w-[400px] mx-auto py-6 my-20 gap-3 h-[200px]">
      <Inputs
        type="text"
        placeholder="Product name"
        value={productName}
        handleOnchange={setProductName}
      />
      
      <Inputs
        type="text"
        placeholder="Type of product "
        value={productType}
        handleOnchange={setProductType}
      />

      <Buttons handleClick={() => CreateProducts(productName, productType)}>
        Create product
      </Buttons>
    </div>
  );
}

export default Inventory;
