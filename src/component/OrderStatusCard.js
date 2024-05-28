import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { badgeBg } from "../constants/order.constants";
import { currencyFormat } from "../utils/number";

const OrderStatusCard = () => {
  return (
    <div>
      <Row className="status-card">
        <Col xs={2}>
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb3%2F10%2Fb310d46e8f33571ea44cc4facf3cd224a90ef3d4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt=""
            height={96}
          />
        </Col>
        <Col xs={8} className="order-info">
          <div>
            <strong>주문번호: "hard_code"</strong>
          </div>

          <div className="text-12">2023-03-31</div>

          <div>리넨셔츠 외 1개</div>
          <div>₩ 45,000</div>
        </Col>
        <Col md={2} className="vertical-middle">
          <div className="text-align-center text-12">주문상태</div>
          <Badge bg="warning">preparing</Badge>
        </Col>
      </Row>
    </div>
  );
};

export default OrderStatusCard;
