/*
ListaItems.jsx: Un componente que recibirá una lista de elementos (mediante props) y se encargará de renderizarlos.


import React, { useState, useEffect } from 'react';
import { getCatImages } from '../services/Api';
import { CatImage } from '../types/Cat';

const CatGallery: React.FC = () => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await getCatImages(10); // Pasa el limit aquí
        setCats(data);
      } catch (err) {
        setError('Error al cargar gatos');
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, []);

  if (loading) return <p>Cargando gatos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cat-gallery">
      <h2>Galería de Gatos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {cats.map((cat) => (
          <div key={cat.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={cat.url} alt="Gato" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            {cat.breeds[0] && (
              <>
                <h3>{cat.breeds[0].name}</h3>
                <p>Temperamento: {cat.breeds[0].temperament}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGallery;
*/

