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
  const [movilidadSeleccionadas, SetMovilidadSeleccionadas] = useState(''); 

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleFulltimeChange = (event) => {
    SetFulltimeSeleccionadas(event.target.value);
    
  };

  const handleMovilidadChange = (event) => {
    SetMovilidadSeleccionadas(event.target.value);
  };
  const candidatosFiltrados = datos.filter((item) => {
    const filtroFulltime = !fulltimeSeleccionadas || item.fullTime === fulltimeSeleccionadas;
    const filtroMovilidad = !movilidadSeleccionadas || item.movilidad === movilidadSeleccionadas;
    return filtroFulltime && filtroMovilidad;
  });

  return (<>
      <div className="filtrarcandidatos">
        <select value={fulltimeSeleccionadas} onChange={handleFulltimeChange}>
          <option value="">Filtrar por fulltime</option>
          <option>Si</option>
          <option>No</option>
        </select>
        <select value={movilidadSeleccionadas} onChange={handleMovilidadChange}>
          <option value="">Filtrar por movilidad</option>
          <option>Si</option>
          <option>No</option>
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
            <Card.Link href="#">Curriculum Vitae</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Container>


    <div className="englobador">
      <div className="cv">Introduce tu CV aquí</div><br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="labels">
          <label>Nombre:</label><br></br>
          <input type="text" {...register('nombre', {
            required: true,
            minLength: 3,
          })}
          />
          <div className="errores">
            {errors.nombre?.type === "required" && <p>El nombre es obligatorio.</p>}
            {errors.nombre?.type === "minLength" && <p>El nombre debe tener al menos 3 letras.</p>}
          </div>
        <div className="">
          <label>Apellido:</label><br></br>
          <input type="text" {...register('apellido', {
            required: true,
            minLength: 3,
           
          })}
          />
          <div className="errores">
            {errors.apellido?.type === "required" && <p>El apellido es obligatorio.</p>}
            {errors.apellido?.type === "minLength" && <p>El apellido debe tener al menos 3 letras.</p>}
          </div>
        </div>
        <div className="">
          <label>Edad:</label><br></br>
          <input type="number" {...register('edad', {
            required: true,
            maxLength: 2,
            validate: edadValidator
          })} />
          <div className="errores">
            {errors.edad?.type === "required" && <p>La edad es obligatoria.</p>}
            {errors.edad?.type === "validate" && <p>La edad tiene que ser entre 18 y 65 años.</p>}
          </div>
        </div>
        <div className="">
          <label> Habilidades(max 5):</label><br></br>
          <input type="text" {...register('habilidades', {
            required: true,
            mixLength: 20,
          })} />
          <div className="errores">
            {errors.habilidades?.type === "required" && <p>Las habilidades son obligatorias. </p>}
          </div>
        </div>
        <div className="">
          <label>Mail:</label><br></br>
          <input type="text" {...register('mail', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            required: true
          })} />
          <div className="errores">
            {errors.mail?.type === "required" && <p>El mail es obligatorio.</p>}
            {errors.mail?.type === "pattern" && <p>El formato del mail es erróneo.</p>}
          </div>
        </div>
        <div className="">
          <label>Full time:</label><br></br>
          <select {...register('fulltime')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="">
          <label>Movilidad:</label><br></br>
          <select {...register('movilidad')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
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