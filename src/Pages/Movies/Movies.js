import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CustomPagination } from '../../Mycomponents/Pagination/CustomPagination';
import { Genres } from '../../Mycomponents/SingleContent/Genres';
import { SingleContent } from '../../Mycomponents/SingleContent/SingleContent';
import useGenres from '../../hooks/useGenres'

const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numOfPages, setnumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL=useGenres(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        setcontent(data.results);
        setnumOfPages(data.total_pages);
    };





    useEffect(() => {

        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL])

    return (
        <div>
            <span className='pageTitle'>Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className='trending'>
                {content && content.map((c) =>
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movies"
                        vote_average={c.vote_average} />)}
            </div>
            {numOfPages > 1 && <CustomPagination setPage={setPage} numofpages={numOfPages} />}

        </div>
    )
}

export default Movies
