import { useState } from "react";

function Formulario({ alAgregar }) {
  const [texto, setTexto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    alAgregar(texto);
    setTexto("");

    setMensaje("Tarea añadida correctamente ✔");

    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="card">
      <form onSubmit={enviar}>
        <input
          placeholder="Nueva tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button>Añadir</button>
      </form>

      {mensaje && <p className="mensaje-ok">{mensaje}</p>}
    </div>
  );
}

export default Formulario;
