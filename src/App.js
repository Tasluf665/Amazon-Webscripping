import { CardItem } from "./CardItem";
import { Container, Row } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container fluid="md">
        <Row>
          <CardItem />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
