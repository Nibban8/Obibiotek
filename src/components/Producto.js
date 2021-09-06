import React, { useState, useEffect, useContext } from "react";
import {
  CreditCard2Back,
  GeoAltFill,
  Whatsapp,
  EnvelopeFill,
  Cart,
  X,
} from "react-bootstrap-icons";
import {
  Container,
  Image,
  ListGroup,
  Button,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { LocationContext } from "../locationContext";

import "./producto.css";

export default function Producto({ producto }) {
  const { country } = useContext(LocationContext);

  const {
    nombre,
    precio,
    imagen,
    contenido,
    descripcion,
    funcionamiento,
    dosificacion,
    url,
    pdf,
  } = producto;

  const [lgShow, setLgShow] = useState(false);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    // Hacer scroll al tope de la pagina
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Container className="primero">
        <div style={{ alignSelf: "center" }} className="imagen">
          <Image src={imagen} fluid />
        </div>
        <div className="info">
          <h1 className="nombre">{nombre}</h1>
          <div className="desc">{descripcion}</div>
          <div
            style={{ textTransform: "lowercase" }}
            className="precio "
          >{`$ ${parseFloat(precio).toFixed(2)} DLL`}</div>

          <div className="comprar mb-4">
            {country === "MX" ? (
              <Button onClick={toggle} variant="dark" className="wide-btn">
                Comprar <CreditCard2Back />
              </Button>
            ) : (
              <Button href={url} variant="dark" className="wide-btn">
                Comprar <CreditCard2Back />
              </Button>
            )}
          </div>
          <div className="contenido">
            <span>Contenido:</span>
            <ListGroup className="mt-3" variant="flush">
              {contenido.map((item) => (
                <ListGroup.Item variant="success">{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Container>
      <div className="segundo mt-4 ">
        <Container>
          <div className="func">
            <h2>Funcionamiento</h2> {funcionamiento}
          </div>

          <div className="uso">
            <h2>Dosificación</h2>
            <ul>
              {dosificacion.map((step) => (
                <li>{step}</li>
              ))}
            </ul>
            <Button
              onClick={() => setLgShow(true)}
              variant="light"
              className="wide-btn"
            >
              Instructivo
            </Button>
          </div>
        </Container>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Ficha Tecnica
          </Modal.Title>
          <Button onClick={() => setLgShow(false)} variant="outline-danger">
            <X></X>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title={nombre}
            src={pdf}
            width="100%"
            height="480"
            allow="autoplay"
          ></iframe>
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={toggle}>
        <Modal.Body>
          <Row>
            <p>Provedor oficial en México</p>
          </Row>

          <Row>
            <Col className="d-flex flex-column justify-content-center">
              <Image
                fluid
                src="https://www.nanogbiotec.com/wp-content/uploads/2016/10/logo.png"
              />
            </Col>
            <Col>
              <div className="mb-2">
                <GeoAltFill className="ml-2" /> Ubicacion:
                <div>
                  Tucidides #66 - A, Col. Vallarta San Jorge C.P.44690,
                  Guadalajara, México
                </div>
              </div>
              <div className="mb-2">
                <EnvelopeFill className="ml-2" /> E-mail:
                <div />
                <a href="info@nanogbiotec.com">info@nanogbiotec.com</a>
              </div>
              <div className="mb-2">
                <Whatsapp className="ml-2" /> Tel:
                <div>
                  <a href="tel:+521(33)19557151">+52 1 (33) 19 55 71 51</a>
                </div>
              </div>
              <div className="mb-2">
                <Cart className="ml-2" /> Web:
                <div>
                  <a href="https://www.nanogbiotec.com/producto/kit-de-fragmentacion-y-kit-ros/">
                    www.nanogbiotec.com
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={toggle}>
            Comprar fuera de México
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
