import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export const AgendaTelefonica = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
        setContacts(response.data);
      } catch (error) {
        console.error("Error al obtener los contactos:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombres</th>
          <th>Teléfono</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.identify}</td>
            <td>{contact.names}</td>
            <td>{contact.telephone}</td>
            <td>{contact.image}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
