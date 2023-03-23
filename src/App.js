import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("james bond");
  const [details, setDetails] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=3bc426b0&s=${search}&p=10&type=movie`
    );
    const data = await response.json();
    setMovies(data.Search);
  };
  const getDetails = async () => {
    const data = await Promise.all(
      movies.map(async (movie) => {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=3bc426b0&i=${movie.imdbID}`
        );
        return response.json();
      })
    );
    setDetails(data);
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  useEffect(() => {
    if (movies.length > 0) {
      getDetails();
    }
  }, [movies]);

  return (
    <Layout>
      <Routes>
        <Route
          index
          element={
            <SearchResults
              movies={movies}
              setSearch={setSearch}
              getMovies={getMovies}
              details={details}
            />
          }
        />
        <Route path=":slug" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Layout>
  );
}

export default App;
