export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: CatBreed[];
}

export interface CatBreed {
  id: string;
  name: string;
  temperament?: string;
  origin?: string;
  country_codes?: string;
  life_span?: string;
  wikipedia_url?: string[];
}