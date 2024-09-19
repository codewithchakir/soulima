const API_KEY = process.env.API_KEY;

import Image from 'next/image';

export default async function MoviePage({params}) {
    const id = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    
    const movie = await res.json();

    if (!movie) {
        throw new Error('Failed to fetch data');
    }

    const genres = movie.genres || [];
    return (
        <div className="container mx-auto p-4">
          {/* Backdrop Image */}
          <div className="relative w-full h-[500px] mb-8">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || 'default-backdrop.jpg'}`}
              alt={movie.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <span className="text-lg font-semibold">
                ({new Date(movie.release_date).getFullYear()})
              </span>
            </div>
          </div>
    
          {/* Movie Details */}
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Movie Poster */}
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path || 'default-poster.jpg'}`}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-lg"
              />
            </div>
    
            {/* Movie Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Overview</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{movie.overview}</p>
    
              {/* Genres */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">Genres</h3>
                <div className="flex gap-2 flex-wrap">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
    
              {/* Additional Info */}
              <div className="flex gap-4 mt-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Release Date</h3>
                  <p>{movie.release_date}</p>
                </div>
    
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Rating</h3>
                  <p>{movie.vote_average.toFixed(1)} / 10</p>
                </div>
    
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Vote Count</h3>
                  <p>{movie.vote_count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}
