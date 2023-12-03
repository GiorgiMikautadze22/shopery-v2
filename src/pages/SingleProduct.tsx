import React from "react";
import Header from "../components/Header";
import { useProductContext } from "../Context";

const SingleProduct = () => {
  const { selectedProduct } = useProductContext();
  return (
    <div>
      <Header selectedProduct={selectedProduct} />
      <div style={{ display: "flex" }}>
        <img style={{ width: "200px" }} src={selectedProduct?.image} alt="" />
        <div>
          <h2>{selectedProduct?.title}</h2>
          <h3>{selectedProduct?.price}</h3>
          <p>{selectedProduct?.description}</p>
          <div>
            <button>Add to Cart</button>
          </div>
          <p>
            <span>Category:</span>
            {selectedProduct?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
