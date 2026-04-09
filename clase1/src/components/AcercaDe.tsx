const AcercaDe = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2>Acerca de TheCatAPI</h2>
          <p className="lead mb-4">
            TheCatAPI es una API pública gratuita que proporciona acceso a miles de fotos de gatos.
          </p>
          
          <h4>Funcionalidad del buscador</h4>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Búsqueda en tiempo real</h5>
              <p>Escribe en el buscador para filtrar resultados automáticamente:</p>
              
              <div className="row">
                <div className="col-md-6">
                  <h6>Número:</h6>
                  <p>Ejemplo: <code>10</code></p>
                  <small className="text-muted">Muestra cantidad de imágenes visibles</small>
                </div>
                <div className="col-md-6">
                  <h6>Nombre de raza:</h6>
                  <p>Ejemplos: <code>siamese</code>, <code>persian</code></p>
                  <small className="text-muted">Filtra todas las imágenes de esa raza</small>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5>API utilizada</h5>
              <p>
                <a href="https://api.thecatapi.com" target="_blank" rel="noopener noreferrer">
                  https://api.thecatapi.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <a 
              href="https://docs.thecatapi.com/" 
              target="_blank" 
              className="btn btn-outline-primary"
              rel="noopener noreferrer"
            >
              Documentación oficial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;