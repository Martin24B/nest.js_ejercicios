import React, { useState } from 'react';

interface BuscadorProps {
  onSearch: (term: string) => void;
}

const Buscador: React.FC<BuscadorProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark buscador-custom mb-0 border-0 container-xxl">
      <div className="container-fluid w-100">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link fw-medium px-3 py-2 rounded-3" href="/lista">Lista</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium px-3 py-2 rounded-3" href="/acerca">Acerca de</a>
          </li>
        </ul>
        <form onSubmit={handleSubmit} className="d-flex ms-auto w-100" role="search">
          <input
            value={inputValue}
            onChange={handleChange}
            className="form-control me-2 shadow-sm rounded-pill px-4 bg-dark text-white border-secondary search-input"
            type="search"
            placeholder="Buscar por numero o raza"
            aria-label="Buscar"
          />
          <button className="btn search-btn rounded-pill px-3" type="submit">
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Buscador;