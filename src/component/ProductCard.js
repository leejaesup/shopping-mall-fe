import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../utils/number";

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    // 상품 디테일 페이지로 가기
    navigate(`/product/${id}`);
  };
  return (
    <div className="card" onClick={() => showProduct(item?._id)}>
        <img src={item?.image} alt={item?.image} />
        <div>{item?.name}</div>
        <div>₩ {currencyFormat(item?.price)}</div>
    </div>
  );
};

export default ProductCard;
