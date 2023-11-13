"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./validator.js";

export const CV = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return ( <>
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
          {errors.nombre?.type === "required" && <p>El nombre es obligatorio</p>}
          {errors.nombre?.type === "minLength" && <p>El nombre debe tener al menos 3 letras</p>}
          {errors.apellido?.type === "maxLength" && <p>El nombre no debe superar las 15 letras</p>}
        </div>
        <div className="apellidos">
          <label>Apellido:</label><br></br>
          <input type="text" {...register('apellido', {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
          />
          {errors.apellido?.type === "required" && <p>El apellido es obligatorio</p>}
          {errors.apellido?.type === "minLength" && <p>El apellido debe tener al menos 3 letras</p>}
          {errors.apellido?.type === "maxLength" && <p>El apellido no debe superar las 15 letras</p>}
        </div>
        <div className="edad">
          <label>Edad:</label><br></br>
          <input type="number" {...register('edad', {
            required: true,
            maxLength: 2,
            validate: edadValidator
         })}/>
          {errors.edad?.type === "required" && <p>La edad es obligatoria</p>}
          {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
        </div>
        <div className="mail">
          <label>Mail:</label><br></br>
          <input type="text" {...register('mail',{
           pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
           required:true
        })} />
           {errors.mail?.type === "required" && <p>El mail es obligatorio</p>}
           {errors.mail?.type === "pattern" && <p>El formato del mail es erróneo</p>}
           </div>
        <div className="fulltime">
          <label>Full time:</label><br></br>
          <select {...register('fulltime')}>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div><br></br>
        <input type="submit" value="Enviar CV" />
      </form>
    </div>
 </>
  );
}

export default CV;