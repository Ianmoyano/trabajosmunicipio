"use client"
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./validator.js";
import Card from 'react-bootstrap/Card';
import { Container } from "reactstrap";
import datos from "../candidatosdisp.json";

export const CV = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [fulltimeSeleccionadas, SetFulltimeSeleccionadas] = useState(''); 
  const [movilidadSeleccionada, SetMovilidadSeleccionada] = useState(''); 
  const [nombreSeleccionado, SetNombreSeleccionado] = useState('');
  const [edadSeleccionada, SetEdadSeleccionada] = useState('');

  const onSubmit = (data  ) => {
    console.log(data);
  
  };
  const handleFulltimeChange = (event) => {
    SetFulltimeSeleccionadas(event.target.value);
    
  };
  const handleMovilidadChange = (event) => {
    SetMovilidadSeleccionada(event.target.value);
  };
  const handleNombreChange =(event) => {
    SetNombreSeleccionado(event.target.value);
  }
  const handleEdadChange = (event) => {
    SetEdadSeleccionada (event.target.value);
  }

  const candidatosFiltrados = datos.filter((item) => {
    const filtroFulltime = !fulltimeSeleccionadas || item.fullTime === fulltimeSeleccionadas;

    const filtroMovilidad = !movilidadSeleccionada || item.movilidad === movilidadSeleccionada;

    const filtroNombre = !nombreSeleccionado || item.nombre.toLowerCase().includes(nombreSeleccionado.toLowerCase());

    const filtroEdad = 
    !edadSeleccionada ||
     (edadSeleccionada === "18-29" && parseInt(item.edad)>=18 && parseInt(item.edad)<=29) ||
     (edadSeleccionada === "30-49" && parseInt(item.edad)>=30 && parseInt(item.edad)<=49) ||
     (edadSeleccionada === "50+" && parseInt(item.edad)>=50);

    return filtroFulltime && filtroMovilidad && filtroNombre && filtroEdad;
  });

  return (<>
      <div className="filtrarcandidatos">
        <input id="nombreInput" value={nombreSeleccionado} onChange={handleNombreChange} placeholder="Buscar por nombre..."></input>
        <select id="fulltimeSelect" value={fulltimeSeleccionadas} onChange={handleFulltimeChange}>
          <option value="">Filtrar por fulltime</option>
          <option>Si</option>
          <option>No</option>
        </select>
        <select id="movilidadSelect" value={movilidadSeleccionada} onChange={handleMovilidadChange}>
          <option value="">Filtrar por movilidad</option>
          <option>Si</option>
          <option>No</option>
        </select>
        <select  id="edadSelect" value={edadSeleccionada} onChange={handleEdadChange}>
          <option value="">Filtrar por edad</option>
          <option>18-29</option>
          <option>30-49</option>
          <option>50+</option>
        </select>
      </div>

    <Container className="cardscandi">
    {candidatosFiltrados.map((item)=>(
        <Card key={item.nombre} style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Subtitle className="mb-1 text-muted">{item.rubro}</Card.Subtitle>
              <div key={item.nombre}>
                <ul>
                  <li> Edad: {item.edad}.</li>
                  <li> Full time: {item.fullTime}.</li>
                  <li> Movilidad: {item.movilidad}.</li>
                  <li> Cualidades: {item.cualidades}.</li>
                  </ul>
              </div>
            <Card.Link href="https://ar.linkedin.com">LinkedIn</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Container>


    <div className="englobador">
      <div className="cv">Introduce tu CV aquí</div><br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="labels">
          <label>Nombre:<br></br>
          <input type="text" {...register('nombre', {
            required: true,
            minLength: 3,
          })}
          /></label>
          <div className="error1">
            {errors.nombre?.type === "required" && <p>El nombre es obligatorio.</p>}
            {errors.nombre?.type === "minLength" && <p>El nombre debe tener al menos 3 letras.</p>}
          </div>
        <div className="">
          <label>Apellido:<br></br>
          <input type="text" {...register('apellido', {
            required: true,
            minLength: 3,
           
          })}
          /></label>
          <div className="error2">
            {errors.apellido?.type === "required" && <p>El apellido es obligatorio.</p>}
            {errors.apellido?.type === "minLength" && <p>El apellido debe tener al menos 3 letras.</p>}
          </div>
        </div>
        <div className="">
          <label>Edad:<br></br>
          <input type="number" {...register('edad', {
            required: true,
            maxLength: 2,
            validate: edadValidator
          })} /></label>
          <div className="error3">
            {errors.edad?.type === "required" && <p>La edad es obligatoria.</p>}
            {errors.edad?.type === "validate" && <p>La edad tiene que ser entre 18 y 65 años.</p>}
            {errors.edad?.type === "maxLength" && <p>La edad debe ser de 2 digitos.</p>}
          </div>
        </div>
        <div className="">
          <label> Habilidades(max 5):<br></br>
          <input type="text" {...register('habilidades', {
            required: true,
            mixLength: 20,
          })} /></label>
          <div className="error4">
            {errors.habilidades?.type === "required" && <p>Las habilidades son obligatorias. </p>}
          </div>
        </div>
        <div className="">
          <label>Mail:<br></br>
          <input type="text" {...register('mail', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            required: true
          })} /></label>
          <div className="error5">
            {errors.mail?.type === "required" && <p>El mail es obligatorio.</p>}
            {errors.mail?.type === "pattern" && <p>El formato del mail es erróneo.</p>}
          </div>
        </div>
        <div className="">
          <label>Full time:<br></br>
          <select {...register('fulltime')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select></label>
        </div>
        <div className="">
          <label>Movilidad:<br></br>
          <select {...register('movilidad')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select></label>
        </div><br></br>
        <input className="submit" type="submit" value="Enviar CV" />
        </div>
      </form>
    </div>
    
    <div className="rectangulo"></div>
  </>
  );
}

export default CV;