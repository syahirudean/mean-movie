export interface Movie {
  id?: string;
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
  id?: string;
  imgURL?: string;
  title?: string;
  description?: string;
  rating?: number;
}
