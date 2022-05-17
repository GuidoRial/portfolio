import React from 'react'

function ContactInfoEsp() {
  return (
      <>
          <p className="first-level light-blue">
              "<span className="blue">informacion_de_contacto</span>":{" "}
              <span className="pink">{"{"}</span>
          </p>
          <p className="second-level light-blue">
              "<span className="cyan">nombre</span>": "
              <span className="green">Guido Rial</span>",
          </p>
          <p className="second-level light-blue">
              "<span className="cyan">título</span>": "
              <span className="green">Front end web developer</span>",
          </p>
          <p className="second-level light-blue">
              "<span className="cyan">ubicación</span>": "
              <span className="green">Rosario, Argentina</span>",
          </p>
          <p className="second-level light-blue">
              "<span className="cyan">teléfono</span>": "
              <span className="green">+54 341 718-2338</span>",
          </p>
          <p className="second-level light-blue">
              "<span className="cyan">email</span>": "
              <span className="green">rialguido@gmail.com</span>"
          </p>
          <p className="first-level pink">
              {"}"} <span className="light-blue">,</span>
          </p>
      </>
  );
}

export default ContactInfoEsp