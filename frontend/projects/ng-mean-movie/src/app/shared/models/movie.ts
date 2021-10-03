export interface Movie {
  id?: number;
  imgURL?: string;
  title?: string;
  description?: string;
  director?: string;
  casts?: string;
  release_date?: number;
  rating?: number;
  date_created?: number;
}

export interface Info {
  id?: number;
  imgURL?: string;
  title?: string;
  description?: string;
  rating?: number;
}
