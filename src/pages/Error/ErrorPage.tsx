import { useNavigate, useRouteError } from "react-router-dom";
import { Button, Col, Container } from "react-bootstrap";

type RouteError = {
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  return (
    <Container>
      <Col xs={{ span: 8, offset: 2 }}>
        <div className="mt-5 text-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Button onClick={() => navigate("/", { replace: true })}>
            Back To Home
          </Button>
        </div>
      </Col>
    </Container>
  );
};

export default ErrorPage;
