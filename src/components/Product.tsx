import React from "react";

const Product: React.FC<{ imgPath: string; text: string; alt: string; }> = ({
  imgPath,
  text,
  alt
}) => {
  return (
    <div className="card product-card mb-4">
      <img src={imgPath} className="card-img-top" alt={alt} loading="lazy" />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Product;
