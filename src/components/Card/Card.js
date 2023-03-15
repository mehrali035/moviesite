import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({movie}) => { 

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (
        <>
            {
                 isLoading
                 ?
                 <div className="cards">
                     <SkeletonTheme color="#202020" highlightColor="#444">
                         <Skeleton height={300} duration={2} />
                     </SkeletonTheme>
                 </div>
                    :
                    <Link to={`/movie/${movie.id}`} stule={{ textDecoration: "none", color: 'white' }}>
                        <div className="cards">
                            <img className="card_img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                            <div className="card_overlay">
                                <div className="card_title">{movie.original_title}</div>
                                <div className="card_runtime">
                                    {movie.release_date}
                                    <span className='card_rating'>{movie.vote_average}</span>
                                </div>
                                <div className="card_description">
                                    {movie ? movie.overview.slice(0,118)+"..." : ""}
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default Card
