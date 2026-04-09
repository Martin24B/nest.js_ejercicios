import React from 'react';
import Buscador from './Buscador';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-3">TheCatAPI</h1>
            <h2 className="lead mb-4">Api para listar gatos por raza 🐱</h2>
          </div>
          <div className="col-md-4">
            <Buscador onSearch={onSearch} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;