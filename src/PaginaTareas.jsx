import { useState } from "react";
import Formulario from "./Formulario";
import ListaTareas from "./ListaTareas";
import FormularioUsuario from "./FormularioUsuario";

function PaginaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregar = (t) => setTareas([...tareas, t]);
  const borrar = (i) => setTareas(tareas.filter((_, idx) => idx !== i));

  return (
    <>
      <h2 style={{ marginBottom: "10px", textAlign: "center" }}>
        Gestor de Tareas
      </h2>

      <FormularioUsuario />
      <Formulario alAgregar={agregar} />
      <ListaTareas tareas={tareas} borrar={borrar} />
      
    </>
  );
}

export default PaginaTareas;
