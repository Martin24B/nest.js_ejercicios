import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>TheCatAPI</h5>
            <p className="mb-0">Api para listar gatos por raza 🐱</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">&copy; 2026 TheCatAPI. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;