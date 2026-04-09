import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CatImage } from './types/Cat';
import { getCatImages } from './services/Api';

import Header from './components/Header';
import Footer from './components/Footer';
import ListaItems from './components/ListaItems';
import AcercaDe from './components/AcercaDe';
import ItemDetalle from './components/ItemDetalle';

function App() {
  const [data, setData] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const images = await getCatImages(24);
        setData(images);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onSearch={setSearchTerm} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<ListaItems data={data} loading={loading} searchTerm={searchTerm} />} />
          <Route path="/lista" element={<ListaItems data={data} loading={loading} searchTerm={searchTerm} />} />
          <Route path="/lista/:id" element={<ItemDetalle data={data} />} />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;