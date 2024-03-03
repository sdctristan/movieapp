import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetcher } from "../lib/axios";

const Home = () => {
    const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await fetcher();

        setMovies(data)
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
      {
        movies.map((movie) => <Card key={movie.imdbid} {...movie} />)
      }
    </main>
  );
};

export default Home;
