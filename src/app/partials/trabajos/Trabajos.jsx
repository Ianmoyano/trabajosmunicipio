import React from 'react';
import { useRouter } from "next/navigation"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from "reactstrap";
import datos from "../empleosdisp.json";

export const Trabajos = () => {
    const router = useRouter();

    const navegarACandidatos = () => {
        router.push("candidatos")
        console.log(datos);
    }

    return (
        <>
            <h2 className="subtitulotrabajos">Trabajos disponibles :</h2>
            <button onClick={() => navegarACandidatos()} className="buscatrab">Personas en busca de trabajo</button>

            <Container className="cardsempleos">
                {datos.map((item) => (
                    <Card key={item.trabajo} style={{ width: '19rem', height: '34rem' }}>
                        <Card.Img className="cardfoto" variant="top" src={item.foto} />
                        <Card.Body>
                            <Card.Title>{item.trabajo}</Card.Title>
                                <div key={item.trabajo}>
                                    <p>_ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: {item.empleador}</p>
                                    <p>_ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣: {item.descripcion}</p>
                                    <p>_ 𝙍𝙪𝙗𝙧𝙤: {item.rubro}</p>
                                    <p>_ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: {item.requisitos}</p>
                                    <p>_ 𝙃𝙤𝙧𝙖𝙧𝙞𝙤: {item.horario} , horas diarias</p>
                                </div>
                            <Button className="enviarcv" onClick={() => navegarACandidatos()} variant="primary">Enviar cv</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
};

