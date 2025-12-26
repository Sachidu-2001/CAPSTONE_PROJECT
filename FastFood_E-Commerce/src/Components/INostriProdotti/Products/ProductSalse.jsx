import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const ProductSalse = () => {
  const [products, setProducts] = useState({ salse: [] });

  //modale
  const [show, setShow] = useState(false);
  const [selectPrt, SetSelectPrt] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    SetSelectPrt(e);
    setShow(true);
  };

  const url = `https://mocki.io/v1/a521af0c-dccb-473f-875d-d7a3a91627ad`;
  const fetchingProducts = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("la fetch non è passata", error);
    }
  };

  fetchingProducts();
  return (
    <Container fluid>
      <Row className="gy-4">
        {products.salse.map((prt, index) => (
          <Col md={3}>
            <Card key={index} className="p-0 m-1 mb-2 cardProducts">
              <Card.Img variant="top" src={prt.image} />
              <Card.Body>
                <Card.Title>{prt.name}</Card.Title>
                <Card.Text>{prt.price.toFixed(2)} &euro;</Card.Text>
                <Button
                  className="backgroundRed"
                  onClick={() => handleShow(prt)}
                >
                  Vedi Dettagli
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectPrt?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-sm-flex">
          <img src={selectPrt?.image} className="img-fluid" />
          <div>
            <p>{selectPrt?.description}</p>
            <p className="fs-1">{selectPrt?.price.toFixed(2)} &euro;</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="backgroundRed" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductSalse;
