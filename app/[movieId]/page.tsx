import Image from 'next/image';

export default async function Movie({params}: any){

    const { movieId } = params;

    const imagePath = 'https://image.tmdb.org/t/p/original/';

    const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const res = await fetchData.json();

    return(
        <div className='flex justify-center items-center'> 
            <div>
                <div className='flex justify-center items-center pt-10'>
                    <Image
                        src={imagePath + res.poster_path}
                        width={300}
                        height={300}
                        alt={`${movieId}-poster`}
                    />
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='py-10 px-10 text-center'>
                        {res.title}
                    </h1>
                    <div className='w-3/4'>
                        {res.overview}
                    </div>
                </div>
            </div>
        </div>
    )
}