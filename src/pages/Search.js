import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hook";
import { useTitle } from "../hook";
import { Card } from "../components";

export function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  console.log(`apiPath: ${apiPath}, queryTerm: ${queryTerm}`);
  const { data: movies } = useFetch(apiPath, queryTerm);
  useTitle(`search result for ${queryTerm} / Cinemate`);
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length == 0 ? `No Result found for ${queryTerm}` : `Result for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
