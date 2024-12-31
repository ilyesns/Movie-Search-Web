import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { Layout } from "./components/Layout";
import { fetchMovies } from "./api/omdbapi";

// Fetch suggestions for tabs
const fetchSuggestions = async (
  query: string = "",
  tab: string = "movie"
): Promise<string[]> => {
  try {
    const { movies } = await fetchMovies(query, tab);

    return movies.map((movie: any) => movie.Title || "");
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout fetchSuggestions={fetchSuggestions} />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
