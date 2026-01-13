import { useEffect, useState } from "react";

export function useFetch(apiPath, queryTerm) {
  const [data, setData] = useState([]);
  const baseURL = "https://api.themoviedb.org/3"
  let url = `${baseURL}/${apiPath}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
  console.log(`url: ${url}`);
  if (queryTerm) url += `&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const movieResponse = await fetch(url);
      const json = await movieResponse.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
}
