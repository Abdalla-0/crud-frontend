import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header/Header";
function App() {
  return (
    <Container className="container-md">
      <Header />
        <Outlet />
    </Container>
  );
}

export default App;
