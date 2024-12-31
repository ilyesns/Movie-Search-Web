import { useEffect, useState } from "react";
import { fetchMovies } from "../api/omdbapi";
import { Movie } from "../models/movie";
import { LoadingSpinner } from "../components/LoadingSpinner";
import MovieList from "../components/MovieList";
import { ErrorComponent } from "../components/ErrorComponent";
import { Pagination } from "../components/Pagination";
import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  selectedTab: string;
  searchQuery: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
const Home = () => {
  const { selectedTab, searchQuery, currentPage, setCurrentPage } =
    useOutletContext<LayoutContext>();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong!");
  const [totalPages, setTotalPages] = useState(1);

  const loadMovies = async (page: number, query: string = searchQuery) => {
    try {
      setIsLoading(true);
      const { movies, total } = await fetchMovies(
        query || "horror",
        selectedTab,
        page
      );

      setMovies(movies);
      setTotalPages(total);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(error?.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    loadMovies(1); // Load movies when tab or search changes
  }, [selectedTab, searchQuery]);
  useEffect(() => {
    setIsError(false);
  }, [selectedTab]);

  useEffect(() => {
    loadMovies(currentPage); // Load movies when the page changes
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className=" bg-gray-800">
      <div className="w-max-[1280px] m-auto p-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <ErrorComponent errorMessage={errorMessage} />
        ) : (
          <>
            <MovieList data={movies} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
