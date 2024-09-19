import Link from "next/link";
import Image from "next/image";

export default function Card({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="relative w-[360px] h-[540px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden transition-transform transform group-hover:scale-105 group-hover:shadow-2xl">
        {/* Movie Poster */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0 transition-opacity duration-300 group-hover:opacity-90"
        />

        {/* Gradient Overlay for Movie Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/45 to-transparent z-10 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:bg-opacity-75">
          {/* Movie Title */}
          <h2 className="text-white font-bold text-xl md:text-2xl line-clamp-2">
            {movie.title}
          </h2>

          {/* Release Year */}
          <span className="text-gray-400 font-semibold">
            ({movie.release_date?.split("-")[0]})
          </span>

          {/* Movie Overview */}
          <p className="text-gray-300 text-sm line-clamp-3 mt-2">
            {movie.overview}
          </p>

          {/* IMDB Score and Popularity */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-yellow-500 font-black">
              <span className="text-xl">IMDB</span>
              <span className="text-3xl ml-2">{movie.vote_average.toFixed(1)}</span>
            </div>

            {/* Popularity Rank */}
            <div className="text-gray-300 font-bold text-2xl">
              #{Math.floor(movie.popularity)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
