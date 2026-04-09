import React from 'react';
import { Link } from 'react-router-dom';
import { CatImage } from '../types/Cat';
import ItemDetalle from './ItemDetalle';

interface ListaItemsProps {
  data?: CatImage[];
  loading?: boolean;
  searchTerm?: string;
}

const ListaItems: React.FC<ListaItemsProps> = ({ 
  data = [], 
  loading = false, 
  searchTerm = '' 
}) => {
  const filteredData = data.filter(img => 
    img.breeds?.[0]?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.id.includes(searchTerm)
  );

  if (loading) return <div className="container mt-4"><p className="text-center">Cargando...</p></div>;

  if (!data || data.length === 0) {
    return <div className="container mt-4"><p className="text-center">No hay datos</p></div>;
  }

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredData.map((image) => (
          <div key={image.id} className="col">
            <Link to={`/lista/${image.id}`} className="text-decoration-none">
              <ItemDetalle image={image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaItems;