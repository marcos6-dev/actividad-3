import { useState, useEffect } from 'react';

const urlBase = "/directus-assets/assets/";

// Variantes de cada producto
const variantes = {
  "Figuras de madera Ratón Pérez y su familia": [
    { nombre: "Ratón Pérez", id: "056738a4-800a-4f03-80d0-b4e85ab32237" },
    { nombre: "Buby Rey Niño", id: "33235faa-6248-4758-9ee5-0083d285834e" },
    { nombre: "Katalina esposa", id: "188b0d3f-5e94-446f-b7fa-8eea93de632c" },
    { nombre: "Adelaida hija mayor", id: "e07ccbd2-6488-4f73-ad5a-e10b5e32a127" },
    { nombre: "Adolfito hijo pequeño", id: "485617d7-b112-428d-a90e-b09177f3213a" },
    { nombre: "Familia completa", id: "0fa38a1a-a2cd-489e-8829-3b21fd2101c4" },
  ],
  "MARCAPÁGINAS ADELAIDA": [
    { nombre: "Azul", id: "4f265b15-d6e3-40a4-a928-3009ad10e63b" },
    { nombre: "Amarillo", id: "be00defd-d302-497a-b685-66d6896d098f" },
    { nombre: "Rojo", id: "fb33a538-be98-475a-9730-e8339070aa20" },
    { nombre: "Morado", id: "0dc319b5-5961-4edc-b353-36f21b54f8b1" },
  ]
};

function TarjetaProducto({ p }) {
  const [imagenActual, setImagenActual] = useState(p.Imagen || p.imagen);
  const [ver3D, setVer3D] = useState(false);

  const nombre = p.Nombre || p.nombre || '';
  const variantesProducto = variantes[nombre] || [];

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
    }}>

      <div style={{ height: '250px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
        {ver3D && p.modelo_3D ? (
          <model-viewer
            src={`${urlBase}${p.modelo_3D}`}
            alt="Modelo 3D"
            auto-rotate
            camera-controls
            style={{ width: '100%', height: '100%' }}
          ></model-viewer>
        ) : (
          <img
            src={`${urlBase}${imagenActual}`}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            alt={nombre}
          />
        )}
      </div>

      <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{nombre}</h3>

      <div style={{ marginBottom: '15px' }}>
        <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50' }}>
          {p.Precio || p.precio || ''}
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', flexGrow: 1, marginBottom: '10px' }}>
        {p.Descripcion || p.descripcion || ''}
      </p>

      {/* Botones de variantes si existen */}
      {variantesProducto.length > 0 && (
        <div style={{ marginBottom: '10px' }}>
          <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '6px' }}>Selecciona variante:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
            {variantesProducto.map((v) => (
              <button
                key={v.id}
                onClick={() => setImagenActual(v.id)}
                style={{
                  backgroundColor: imagenActual === v.id ? '#646cff' : '#eee',
                  color: imagenActual === v.id ? 'white' : '#333',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {v.nombre}
              </button>
            ))}
          </div>
        </div>
      )}

      {p.modelo_3D && (
        <button
          onClick={() => setVer3D(!ver3D)}
          style={{
            backgroundColor: ver3D ? '#e74c3c' : '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}
        >
          {ver3D ? 'Ver Foto' : 'Ver en 3D'}
        </button>
      )}

      <button
        onClick={() => window.open('https://casamuseoratonperez.store/collections/productos-que-no-pueden-faltar-de-raton-perez?page=1', '_blank')}
        style={{
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          padding: '12px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        Comprar
      </button>
    </div>
  );
}

function PaginaDirectus() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/directus-api/items/mas_vendidos')
      .then(res => res.json())
      .then(datos => {
        console.log(datos.data[0]);
        setProductos(datos.data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error cargando datos:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Cargando tienda...</p>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Tienda Casa Museo Ratón Pérez</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {productos.map((p, index) => (
          <TarjetaProducto key={p.id || index} p={p} />
        ))}
      </div>
    </div>
  );
}

export default PaginaDirectus;