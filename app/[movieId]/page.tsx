import Image from 'next/image';

export default async function Movie({params}: any){

    const { movieId } = params;

    const imagePath = 'https://image.tmdb.org/t/p/original/';

    const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const res = await fetchData.json();

    console.log(res)

    return(
        <>  
            <Image
                src={imagePath + res.poster_path}
                width={400}
                height={400}
                alt={`${movieId}-poster`}
            />
            {res.title}
        </>
    )
}