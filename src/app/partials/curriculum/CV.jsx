"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./validator.js";
import Card from 'react-bootstrap/Card';
import { Container } from "reactstrap";

export const CV = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (<>
    <Container className="cardscandi">

      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Juan Ignacio Suarez</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Rubro: automotor</Card.Subtitle>
          <Card.Text>
            <ul>
            <li>Edad: 19 años.</li>
            <li>Full timen: no.</li>
            <li>Movilidad: si.</li>
            <li>Cualidades: puntualidad, compromiso, carisma, ...</li></ul>
          </Card.Text>
          <Card.Link href="#">Curriculum Vitae</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Matia Mostajo</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Rubro: cadenas de comida rápida.</Card.Subtitle>
          <Card.Text>
          <ul>
            <li>Edad: 25 años.</li>
            <li>Full timen: no.</li>
            <li>Movilidad: si.</li>
            <li>Cualidades: puntualidad, compromiso, adaptacion ...</li>
            </ul>
          </Card.Text>
          <Card.Link href="#">Curriculum Vitae</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Ian Lucca Moyano</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Rubro: obra</Card.Subtitle>
          <Card.Text>
          <ul>
            <li>Edad: 18 años.</li>
            <li>Full time: si.</li>
            <li>Movilidad: no.</li>
            <li>Cualidades: puntualidad, facil aprendizaje, carisma, ...</li>
            </ul>
          </Card.Text>
          <Card.Link href="#">Curriculum Vitae</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Thiago Schiaffino Dechia</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Rubro: hoteleria</Card.Subtitle>
          <Card.Text>
          <ul>
            <li>Edad: 19 años.</li>
            <li>Full timen: no.</li>
            <li>Movilidad:noi.</li>
            <li>Cualidades: puntualidad, compromiso, fluidez, ...</li>
            </ul>
          </Card.Text>
          <Card.Link href="#">Curriculum Vitae</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Joaquin Lopez</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Rubro: vendedor</Card.Subtitle>
          <Card.Text>
          <ul>
            <li>Edad: 15 años.</li>
            <li>Full timen: si.</li>
            <li>Movilidad: si.</li>
            <li>Cualidades: dedicacion, compromiso, carisma, ...</li>
            </ul>
          </Card.Text>
          <Card.Link href="#">Curriculum Vitae</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Miqueas Bequer</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Rubro: restaurante</Card.Subtitle>
          <Card.Text>
          <ul>
            <li>Edad: 28 años.</li>
            <li>Full timen: no.</li>
            <li>Movilidad: no.</li>
            <li>Cualidades: inteligencia, compromiso, carisma, ...</li>
            </ul>
          </Card.Text>
          <Card.Link href="#">Curriculum Vitae</Card.Link>
        </Card.Body>
      </Card>
    </Container>

    <div className="englobador">
      <div className="cv">Introduce tu CV aquí</div><br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nombre">
          <label>Nombre:</label><br></br>
          <input type="text" {...register('nombre', {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
          />
          <div className="errores">
            {errors.nombre?.type === "required" && <p>El nombre es obligatorio</p>}
            {errors.nombre?.type === "minLength" && <p>El nombre debe tener al menos 3 letras</p>}
            {errors.apellido?.type === "maxLength" && <p>El nombre no debe superar las 15 letras</p>}
          </div>
        </div>
        <div className="apellidos">
          <label>Apellido:</label><br></br>
          <input type="text" {...register('apellido', {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
          />
          <div className="errores">
            {errors.apellido?.type === "required" && <p>El apellido es obligatorio</p>}
            {errors.apellido?.type === "minLength" && <p>El apellido debe tener al menos 3 letras</p>}
            {errors.apellido?.type === "maxLength" && <p>El apellido no debe superar las 15 letras</p>}
          </div>
        </div>
        <div className="edad">
          <label>Edad:</label><br></br>
          <input type="number" {...register('edad', {
            required: true,
            maxLength: 2,
            validate: edadValidator
          })} />
          <div className="errores">
            {errors.edad?.type === "required" && <p>La edad es obligatoria</p>}
            {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
          </div>
        </div>
        <div className="Habilidades">
          <label> Habilidades(max 5):</label><br></br>
          <input type="text" {...register('habilidades', {
            required: true,
            mixLength: 20,

          })} />
          <div className="errores">
            {errors.habilidades?.type === "required" && <p>Las habilidades son obligatorias letras</p>}
            {errors.habilidades && <p>Este campo tiene que tener como minimo 20</p>}
          </div>
        </div>
        <div className="mail">
          <label>Mail:</label><br></br>
          <input type="text" {...register('mail', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            required: true
          })} />
          <div className="errores">
            {errors.mail?.type === "required" && <p>El mail es obligatorio</p>}
            {errors.mail?.type === "pattern" && <p>El formato del mail es erróneo</p>}
          </div>
        </div>
        <div className="fulltime">
          <label>Full time:</label><br></br>
          <select {...register('fulltime')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="movilidad">
          <label>Movilidad:</label><br></br>
          <select {...register('movilidad')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div><br></br>
        <input className="submit" type="submit" value="Enviar CV" />

      </form>
    </div>
    <div className="rectangulo6"></div>
  </>
  );
}

export default CV;