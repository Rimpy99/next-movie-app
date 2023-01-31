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
            <Image 
                src={imagePath + posterPath}
                width={400}
                height={400}
                alt={`${movieId}-poster`}
            />
        </div>
    );
};