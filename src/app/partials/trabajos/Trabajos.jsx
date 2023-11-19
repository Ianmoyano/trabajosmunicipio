"use client"
import React from "react";
import { useRouter } from "next/navigation"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from "reactstrap";

export const Trabajos = () => {
    const router = useRouter();
    const navegarACandidatos = () => {
        router.push("candidatos")
    }
    return (
        <>

            <h2 className="subtitulotrabajos">Trabajos disponibles :</h2>
            <button onClick={() => navegarACandidatos()} className="buscatrab">Personas en busca de trabajo</button>
            
            <Container className="cardsempleos">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./img/obrero.avif" />
                    <Card.Body>
                        <Card.Title>Obrero</Card.Title>
                        <Card.Text>
                            <br />
                            _ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: Cooperativa Obrera.<br />
                            _ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙥𝙪𝙚𝙨𝙩𝙤: operador de máquinas para mover arena.<br />
                            _ 𝙍𝙪𝙗𝙧𝙤: obra.<br />
                            _ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: experiencia en operar máquina.<br />
                            _ 𝙃𝙤𝙧𝙖𝙧𝙞𝙤: 8hs Diarias (excepto domingos).<br /><br />
                        </Card.Text>
                        <Button variant="primary">Enviar cv</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./img/profe.png" />
                    <Card.Body>
                        <Card.Title>Profesor</Card.Title>
                        <Card.Text>
                            <br />
                            _ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: escuela San Cayetano.<br />
                            _ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙥𝙪𝙚𝙨𝙩𝙤: trabajo disponible en la
                            escuela<br />  San Cayetano como maestro de matemática. <br />
                            _ 𝙍𝙪𝙗𝙧𝙤: educación. <br />
                            _ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: titulo en el área de matemática.<br />
                            _ 𝙃𝙤𝙧𝙖𝙧𝙞𝙤: 5hs de lunes a viernes.<br /><br /><br />
                        </Card.Text>
                        <Button variant="primary">Enviar cv</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./img/electricista.jpg" />
                    <Card.Body>
                        <Card.Title>Electrisista</Card.Title>
                        <Card.Text>
                            _ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: EDES.<br />
                            _ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙥𝙪𝙚𝙨𝙩𝙤: trabajo disponible en
                            empresa electrica EDES.<br />
                            _ Rubro: obra.<br />
                            _ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: titulo en electricista y excasa
                            experiencia.<br />
                            _ 𝙃𝙤𝙧𝙖𝙧𝙞𝙤: 4hs diarias (no incluye fin de semanas).


                            <br /><br /><br /><br />
                        </Card.Text>
                        <Button variant="primary">Enviar cv</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./img/peluquero.jpg" />
                    <Card.Body>
                        <Card.Title>Peluquero</Card.Title>
                        <Card.Text>
                            <br />
                            _ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: Vintage peluqueria.<br />
                            _ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙥𝙪𝙚𝙨𝙩𝙤: recepcionista en peluqueria Vintage.<br />
                            _ 𝙍𝙪𝙗𝙧𝙤: servicio.<br />
                            _ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: experiencia como recepcionista.<br />
                            _ 𝙃𝙤𝙧𝙖𝙧𝙞𝙤: 6hs diarias.<br />
                            <br /><br /><br /><br /><br />
                        </Card.Text>
                        <Button variant="primary">Enviar cv</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./img/carpintero.webp" />
                    <Card.Body>
                        <Card.Title>Carpintero</Card.Title>
                        <Card.Text>
                            <br />
                            _ 𝙀𝙢𝙥𝙡𝙚𝙖𝙙𝙤𝙧: Aaron González.<br />
                            _ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙥𝙪𝙚𝙨𝙩𝙤: ayudante en
                            Aaron Carpintería.<br />
                            _ 𝙍𝙪𝙗𝙧𝙤: obra.<br />
                            _ 𝙍𝙚𝙦𝙪𝙞𝙨𝙞𝙩𝙤𝙨: titulo en carpintería.<br />
                            _𝙃𝙤𝙧𝙖𝙧𝙞𝙤: 6hs de lunes a sabados.
                            <br /><br /><br /><br /><br />
                        </Card.Text>
                        <Button variant="primary">Enviar cv</Button>
                    </Card.Body>
                </Card>


            </Container>



        </>
    )
}