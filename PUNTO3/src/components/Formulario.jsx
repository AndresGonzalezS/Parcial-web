import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Formulario = () => {
  const [names, setNames] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", {
        names: names,
        telephone: telephone,
        image: image
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al guardar el contacto:", error);
    }
  };

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="names">
          <Form.Label>Nombres:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" value={names} onChange={(e) => setNames(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telephone">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el teléfono" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Imagen URL:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la URL de la imagen" value={image} onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Guardar Contacto</Button>
      </Form>
    </div>
  );
};
