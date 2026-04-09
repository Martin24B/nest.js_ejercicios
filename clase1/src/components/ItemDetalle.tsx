import React from 'react';
import { useParams } from 'react-router-dom';
import { CatImage } from '../types/Cat';

interface ItemCardProps {
  image: CatImage;
}

interface ItemDetalleRutaProps {
  data: CatImage[];
}

const ItemDetalle: React.FC<ItemCardProps | ItemDetalleRutaProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  if ('image' in props) {
    const { image } = props;
    return (
      <div className="card h-100">
        <img 
          src={image.url} 
          className="card-img-top object-fit-cover" 
          alt={image.breeds?.[0]?.name || 'Gato'}
          style={{ height: '250px' }} 
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title flex-grow-1">
            {image.breeds?.[0]?.name || 'Gato callejero'}
          </h6>
          <p className="card-text small mb-2">
            {image.breeds?.[0]?.temperament || 'Desconocido'}
          </p>
          <small className="text-muted">
            {image.width}x{image.height}px
          </small>
        </div>
      </div>
    );
  }

  const { data } = props;
  const image = data.find(img => img.id === id);

  if (!image) {
    return <div className="container mt-5 text-center"><h3>No encontrado</h3></div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img src={image.url} className="card-img-top object-fit-cover" alt={image.breeds?.[0]?.name || 'Gato'} style={{ height: '400px' }} />
            <div className="card-body">
              <h3>{image.breeds?.[0]?.name || 'Gato callejero'}</h3>
              <p className="card-text">
                <strong>Temperamento:</strong> {image.breeds?.[0]?.temperament || 'Desconocido'}<br/>
                <strong>Origen:</strong> {image.breeds?.[0]?.origin || 'Desconocido'}<br/>
                <strong>Tamaño:</strong> {image.width}x{image.height}px
              </p>
              <a href={image.url} target="_blank" className="btn btn-primary">Ver original</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetalle;