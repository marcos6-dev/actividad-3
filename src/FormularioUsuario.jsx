import { useState, useEffect } from "react";

function FormularioUsuario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [datosActuales, setDatosActuales] = useState({ nombre: "", correo: "" });

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("usuario")) || {};
    setDatosActuales({
      nombre: datos.nombre || "",
      correo: datos.correo || ""
    });
  }, []);

  const guardar = () => {
    const nuevosDatos = { nombre, correo };

    localStorage.setItem("usuario", JSON.stringify(nuevosDatos));

    setDatosActuales(nuevosDatos);

    setMensaje("Datos guardados correctamente ✔");

    // Vaciar los inputs

    setNombre("");
    setCorreo("");

    // Quitar mensaje después de 2 segundos
    
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="card">
      <h3>Datos del usuario</h3>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <button onClick={guardar}>Guardar</button>

      {mensaje && <p className="mensaje-ok">{mensaje}</p>}

      <hr />

      <h4>Datos actuales:</h4>
      <p><strong>Nombre:</strong> {datosActuales.nombre || "—"}</p>
      <p><strong>Correo:</strong> {datosActuales.correo || "—"}</p>
    </div>
  );
}

export default FormularioUsuario;
