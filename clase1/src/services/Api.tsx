import { CatImage } from '../types/Cat';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_MIGmnxO21jVd2zTkFAhAZd5wB7x1ct83IWrimqlOiTm4q0n53a5MieB0hk063UZ1';

export const getCatImages = async (limit: number): Promise<CatImage[]> => {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit + '&api_key=' + API_KEY;
  
  const response = await fetch(url);

  if (!response.ok) throw new Error('No se pudo obtener respuesta a la consulta realizada...');
  
  return response.json();
};