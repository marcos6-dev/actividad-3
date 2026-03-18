import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PaginaContador from "./PaginaContador";
import PaginaTareas from "./PaginaTareas";

function App() {
  return (
    <div className="contenedor">

     
      <header className="header-app">
        <h1>Actividad-3 – Marcos García Ortiz</h1>

        <div className="logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite Logo" />
        </div>
      </header>

      <BrowserRouter>
        <nav>
          <Link to="/">Contador</Link>
          <Link to="/tareas">Tareas</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PaginaContador />} />
          <Route path="/tareas" element={<PaginaTareas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
