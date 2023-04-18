import React from "react";
import Header from "../pages/Sheard/Header/Header";
import Footer from "../pages/Sheard/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Sheard/LeftNav/LeftNav";
import Rightnav from "../pages/Sheard/RightNav/Rightnav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        
        <Row >
          <Col className="text-center border" lg={3}>
            <LeftNav/>
            </Col>
          <Col className="text-center border" lg={6}>
            <h2>Main Content Coming</h2>
            </Col>
          <Col className="text-center border" lg={3}>
            <Rightnav/>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
