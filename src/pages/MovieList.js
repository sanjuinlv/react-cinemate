import { useFetch } from "../hook";
import { useTitle } from "../hook";
import { Card } from "../components";

export function MovieList({apiPath, title}) {

  const {data: movies} = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap sm-other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
