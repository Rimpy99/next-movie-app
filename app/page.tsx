import Image from 'next/image'
import styles from './page.module.css'

import MoviePoster from './MoviePoster';

export default async function Home() {

  const fetchData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await fetchData.json();

  return (
    <main className='grid grid-cols-fluid py-7 px-7'>
      {
        res.results.map((movie: any) => (
          <MoviePoster posterPath={movie.poster_path}  movieId={movie.id}/>
        ))
      }
    </main>
  )
}
