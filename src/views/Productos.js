import React, { useContext, useState } from "react";
import {
  CreditCard2Back,
  GeoAltFill,
  Whatsapp,
  EnvelopeFill,
  Cart,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import { LocationContext } from "../locationContext";

export default function Productos() {
  const { url_frag, url_ros, country } = useContext(LocationContext);

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div id="productos" className="productos">
      <div className="producto">
        <div className="img-container">
          <div className="imagen frag"></div>
        </div>

        <div className="descripcion p-4">
          <div className="heading">
            <h2>Sperm Frag</h2>
          </div>
          <p>
            Kit de diagnóstico in vitro que permite medir la fragmentación del
            ADN de una manera rápida, sencilla y reproducible
          </p>
          <div className="links">
            <Link to="/productos/frag">
              <Button variant="dark" className="wide-btn">
                Ver mas
              </Button>
            </Link>
            {country === "MX" ? (
              <Button onClick={toggle} variant="dark" className="wide-btn">
                Comprar <CreditCard2Back />
              </Button>
            ) : (
              <Button href={url_ros} variant="dark" className="wide-btn">
                Comprar <CreditCard2Back />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="producto invertido">
        <div className="img-container">
          <div className="imagen ros"></div>
        </div>
        <div className="descripcion p-4">
          <h2 className="heading">Sperm ROS</h2>
          <p>
            Kit para detección exceso de aniones superóxido causados por
            leucocitos y espermatozoides anormales en el eyaculado
          </p>
          <div className="links">
            <Link to="/productos/ros">
              <Button variant="dark" className="wide-btn">
                Ver mas
              </Button>
            </Link>
            {country === "MX" ? (
              <Button onClick={toggle} variant="dark" className="wide-btn">
                Comprar <CreditCard2Back />
              </Button>
            ) : (
              <Button href={url_frag} variant="dark" className="wide-btn">
                Comprar <CreditCard2Back />
              </Button>
            )}
          </div>
        </div>
      </div>

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
