import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
      CryptoVerse
      <br />
      All rights reserved
    </Typography.Title>
    <Space>
      <Link to="/">Home</Link>
      <Link to="/cryptocurrencies">Currencies</Link>
      <Link to="/news">News</Link>
    </Space>
  </>
);

export default Footer;
