import React, { useContext } from "react";
import DNA from "../img/DNA.jpg";
import Producto from "../components/Producto";
import { LocationContext } from "../locationContext";

export default function Frag() {
  const { url_frag, country } = useContext(LocationContext);
  const frag = {
    nombre: "Sperm Frag",
    precio: country === "PE" ? "200.00" : "250.00",
    imagen: DNA,
    contenido: [
      "12 x Laminillas pre-tratadas",
      "12 x Tubos Eppendorf® con gel de agarosa de bajo punto de fusión",
      "Botella con solucion de Lisis 120 ml",
      "Vial con solución ácida 2.0 ml",
    ],
    descripcion: "Kit para diagnostico de fragmentación del ADN",
    funcionamiento:
      "Sperm Frag se basa en la técnica (SCD) Dispersión de la Cromatina Espermática, por sus siglas en ingles. Está fundamentada en un proceso controlado de desnaturalización del ADN, para facilitar la posterior eliminación de las proteínas que contiene cada espermatozoide. De esta forma, espermatozoides normales generan un halo formado por bucles de ADN en la cabeza del espermatozoide, que no está presente en aquellos que tienen su ADN dañado.",
    dosificacion: [
      "Se prepara la solución desnaturalizante HCL al 37%, aplicar por 7 minutos",
      "La solución de lisis se aplica por 5 minutos",
    ],
    url: `${url_frag}`,

    pdf: "https://drive.google.com/file/d/1Gew9rcEBeZeMq-ToF3Hyzr24QskZoE7f/preview",
  };

  return <Producto producto={frag} />;
}
