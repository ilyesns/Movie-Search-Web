import { Movie } from "../models/movie";

const API_KEY = "f6476329";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (
  query: string,
  type: string,
  page: number = 1
): Promise<{ movies: Movie[]; total: number }> => {
  const response = await fetch(
    `${BASE_URL}?s=${query}&type=${type}&page=${page}&apikey=${API_KEY}`
  );
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  const listMovies: Movie[] =
    data.Search?.map((item: any) => ({
      Title: item.Title,
      Year: item.Year,
      imdbID: item.imdbID,
      Type: item.Type,
      Poster: item.Poster,
    })) || [];

  return { movies: listMovies, total: data.totalResults };
};

export const fetchMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data;
};
