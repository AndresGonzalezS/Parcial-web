import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Headers } from './components/Headers';
import { AgendaTelefonica } from './components/AgendaTelefonica';
import { Formulario } from './components/Formulario';

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Headers nombre={"Agenda Telefónica - Andrés González"} flag={flag} setFlag={setFlag}/>
      {flag ? <Formulario /> : <AgendaTelefonica />}
    </>
  );
}

export default App;
