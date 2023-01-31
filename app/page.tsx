import Image from 'next/image'
import styles from './page.module.css'

import Movies from './Movies';

export default function Home() {
  return (
    <main>
      <h1 className='text-red-500'>main page</h1>
      <Movies/>
    </main>
  )
}
