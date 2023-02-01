import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    posterPath: string,
    movieId: number,
}

export default function MoviePoster({posterPath, movieId}: Props){
    const imagePath = 'https://image.tmdb.org/t/p/original/';

    return(
        <div className="py-4 px-2">
            <Link href={`/${movieId}`} className="relative">
                <Image 
                    src={imagePath + posterPath}
                    width={400}
                    height={400}
                    alt={`${movieId}-poster`}
                />
                <div 
                    className='
                        absolute
                        top-0
                        left-0
                        w-full
                        h-full
                        border-2
                        opacity-0
                        z-10
                        hover:opacity-100
                        transition-all
                    '
                ></div>
            </Link>
        </div>
    );
};