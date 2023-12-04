import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'reactstrap';
import datos from '../empleosdisp.json';

export const Trabajos = () => {
  const router = useRouter();
  const [horasSeleccionadas, setHorasSeleccionadas] = useState(''); 
  const [rubroSeleccionado, setRubroSeleccionado] = useState('');

  const navegarACandidatos = () => {
    router.push('candidatos');
  };

  const handleHorasChange = (event) => {
    setHorasSeleccionadas(event.target.value);
    
  };

  const handleRubroChange = (event) => {
    setRubroSeleccionado(event.target.value);
  };
    const trabajosFiltrados = datos.filter((item) => {
        const filtroHoras = !horasSeleccionadas || parseInt(item.horario) === parseInt(horasSeleccionadas, 10);
        const filtroRubro = !rubroSeleccionado || item.rubro === rubroSeleccionado;
        return filtroHoras && filtroRubro;
      });

  return (
    <>
      <h2 className="subtitulotrabajos">Trabajos disponibles :</h2>
      <button onClick={() => navegarACandidatos()} className="buscatrab">
        Personas en busca de trabajo
      </button>
      <div className="filtrartrabajos">
        <select value={horasSeleccionadas} onChange={handleHorasChange}>
          <option value="">Filtrar por horas</option>
          <option>4</option>
          <option>8</option>
        </select>
        <select value={rubroSeleccionado} onChange={handleRubroChange}>
          <option value="">Filtrar por rubro</option>
          <option>Obra</option>
          <option>Servicio</option>
        </select>
      </div>

      <Container className="cardsempleos">
      {trabajosFiltrados.map((item) => (
          <Card key={item.trabajo} style={{ width: '19rem', height: '34rem' }}>
                        <Card.Img className="cardfoto" variant="top" src={item.foto} />
                        <Card.Body>
                            <Card.Title>{item.trabajo}</Card.Title>
                                <div key={item.trabajo}>
                                    <p>_ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: {item.empleador}</p>
                                    <p>_ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣: {item.descripcion}</p>
                                    <p>_ 𝙍𝙪𝙗𝙧𝙤: {item.rubro}</p>
                                    <p>_ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: {item.requisitos}</p>
                                    <p>_ 𝙃𝙤𝙧𝙖𝙧𝙞𝙤: {item.horario}, horas diarias</p>
                                </div>
                            <Button className="enviarcv" onClick={() => navegarACandidatos()} variant="primary">Enviar cv</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
}