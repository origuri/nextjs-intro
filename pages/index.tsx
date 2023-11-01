import Seo from "@/components/Seo";
import { useEffect, useState } from "react";
import * as React from "react";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const API_KEY = "5e8adfbcbe0ad3d1d09d10601517553f";

function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  console.log("여기는 home");

  useEffect(() => {
    console.log("홈 유즈이펙트 ");

    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      <span className="movieTitle">
        {!movies ? "Loading..." : "Movies List"}
      </span>
      <div className="movieContainer">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <h4>{movie.original_title}</h4>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .container {
            text-align: center;
          }
          .movieContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .movie {
            text-align: center;
            font-size: 18px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }

           {
            /* scale :  이미지를 1.05배 확대, translateY는 이미지 수직으로 10px 이동 */
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movieTitle {
            color: red;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}
export default React.memo(Home);
