import { Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header/Header";
function App() {
  return (
    <Container>
      <Header />
      <Col xs={{ span: 8, offset: 2 }}>
        <Outlet />
      </Col>
    </Container>
  );
}

export default App;
