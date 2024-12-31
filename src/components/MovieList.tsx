import { Movie } from "../models/movie";
import { MovieCard } from "./MovieCard";

export default function MovieList({ data }: { data: Movie[] }) {
  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-3">
        {data.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}
