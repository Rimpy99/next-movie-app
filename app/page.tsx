import Image from 'next/image'
import styles from './page.module.css'

import Movies from './Movies';

export default async function Home() {

  const fetchData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await fetchData.json();
  console.log(res);

  return (
    <main>
      <h1 className='text-red-500'>main page</h1>
      {
        res.results.map((movie: any) => (
            <div>{movie.title}</div>
        ))
      }
    </main>
  )
}
