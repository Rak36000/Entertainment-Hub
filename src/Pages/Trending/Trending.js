import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SingleContent } from '../../Mycomponents/SingleContent/SingleContent'
import './Trending.css'
import { CustomPagination } from '../../Mycomponents/Pagination/CustomPagination'


const Trending = () => {
    const [page, setPage] = useState([1])
    const [content, setcontent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
        setcontent(data.results);
    }

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className='trending'>
                {content && content.map((c) =>
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average} />)}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending
