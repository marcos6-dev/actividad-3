import { useState } from "react";

function PaginaContador() {
  const [count, setCount] = useState(0);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <p>Valor actual: {count}</p>
    </div>
  );
}

export default PaginaContador;
