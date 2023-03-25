import "./App.css";
import "./css/main.css";
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
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    if (movies.length > 0) {
      getDetails();
    }
    // eslint-disable-next-line
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

/* Kilder

ackarlse for GitHub(24 februar, 2023). Forelesning om api og søkefunksjon fra kode "gitcollab".
https://github.com/ackarlse/gitcollab/commits/main

Christian Robertson for Google Fonts(u.å). Roboto Condensed.
https://fonts.google.com/specimen/Roboto+Condensed 

Font Awesome(u.å). 
https://fontawesome.com/icons/magnifying-glass?f=classic&s=regular

Fritz, B.(u.å). OMDb API.
https://www.omdbapi.com/ 

Liu, J.(4 november, 2019). How to use async/await with map and Promise.all.
https://dev.to/jamesliudotcc/how-to-use-async-await-with-map-and-promise-all-1gb5 

Myke_simon for Unsplash(8. september, 2018). Movie Night.
https://unsplash.com/photos/atsUqIm3wxo 

Popeye for StackOverflow(8. september, 2017). Is it possible to map only a portion of an array? (Array.map())
https://stackoverflow.com/questions/39455224/is-it-possible-to-map-only-a-portion-of-an-array-array-map

Schäferhoff, N(8. mars, 2022). CSS Box Shadow Tutorial: A Step-By-Step Guide (+ Examples).
https://torquemag.io/2022/03/css-box-shadow-tutorial/

Schwarzmüller, M. for Udemy(mars, 2023). React - The Complete Guide (incl Hooks, React Router, Redux).
https://www.udemy.com/course/react-the-complete-guide-incl-redux/ 

W2schools(u.å). Sass @import and Partials.
https://www.w3schools.com/sass/sass_import.php 

W3schools(u.å). Sass @mixin and @include.
https://www.w3schools.com/sass/sass_mixin_include.php


 */
