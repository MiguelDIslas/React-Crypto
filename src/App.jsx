import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cryptocurrencies from "./components/CryptoCurrencies";
import CyptoDetails from "./components/CryptoDetails";
// import Exchanges from "./components/Exchanges";
import News from "./components/News";
import NotFound from "./components/NotFound";

// Styles
import { GlobalSytle } from "./GlobalStyle";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                ></Route>
                <Route
                  path="/crypto/:coinId"
                  element={<CyptoDetails />}
                ></Route>
                {/* <Route path="/exchanges" element={<Exchanges />}></Route> */}
                <Route path="/news" element={<News />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </Layout>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
      <GlobalSytle />
    </Router>
  );
};

export default App;
