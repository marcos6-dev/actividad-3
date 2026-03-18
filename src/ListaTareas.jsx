function ListaTareas({ tareas, borrar }) {
  return (
    <div className="card">
      <ul>
        {tareas.map((t, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            {t}
            <button
              style={{ marginLeft: "10px", background: "red" }}
              onClick={() => borrar(i)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
