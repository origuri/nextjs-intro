import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
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

const Home = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
  console.log("home 입니다.");

  const router = useRouter();

  const onClick = (movie: IMovie) => {
    router.push(
      {
        pathname: `movies/${movie.original_title}/${movie.id}`,
        query: {
          img: movie.poster_path,
          overview: movie.overview,
        },
      },
      `movies/${movie.original_title}/${movie.id}`
    );

    console.log("onclick");
  };

  return (
    <div className="container">
      <Seo title="Home" />
      <span className="movieTitle"></span>
      <div className="movieContainer">
        {results.map((movie: IMovie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => onClick({ ...movie })}
          >
            <Link
              href={{
                pathname: `movies/${movie.original_title}/${movie.id}`,
                query: {
                  img: movie.poster_path,
                  overview: movie.overview,
                },
              }}
            >
              <h4>{movie.original_title}</h4>
            </Link>
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

          h4 {
            color: black;
          }
        `}
      </style>
    </div>
  );
};
export default React.memo(Home);

export const getServerSideProps = async () => {
  console.log("서버사이드프롭스");
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
};
