import React from 'react';
import Image from 'next/image';

type Props = {
    posterPath: string,
    movieId: number,
}

export default async function MoviePoster({posterPath, movieId}: Props){
    const imagePath = 'https://image.tmdb.org/t/p/original/';

    return(
        <div>
            <Image 
                src={imagePath + posterPath}
                width={400}
                height={400}
                alt={`${movieId}-poster`}
            />
        </div>
    );
};