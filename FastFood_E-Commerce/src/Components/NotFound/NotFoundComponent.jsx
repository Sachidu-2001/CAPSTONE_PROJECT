import { Container } from "react-bootstrap";

const NotFoundComponent = () => {
  return (
    <>
      <Container>
        <h1>Errore 404- Pagina Non Trovata</h1>
        <h3>
          La Pagina non è stata creata oppure il Tuo Programmatore è troppo
          pigro
        </h3>
      </Container>
    </>
  );
};

export default NotFoundComponent;
