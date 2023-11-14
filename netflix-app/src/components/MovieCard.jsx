import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  // console.log('[MovieCard.jsx]: ', movie)
  //https://www.themoviedb.org/t/p/w355_and_h200_multi_faces

  const {genreList} = useSelector((state)=>state.movie) 
  console.log('[MovieCard.js]: ',genreList);

  const div_styled = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path})`,
    width: '300px',
    height: '200px'
  }

  return (
    <div style={div_styled} className='movie-card'>
      <Link to={`/movies/${movie.id}`}>
      <div className='overlay'>
        <h1>{movie.title}</h1>
        <div className='genres'>
          {movie.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {/* find(): 일치한 정보들 중 첫번째 요소만 반환하는 함수 */}
              {genreList.find((item)=>item.id===id).name}
            </Badge>
          ))}
        </div>
        <div className='info'>
          <span>{`평점:${movie.vote_average}점`}</span>
          <span>|</span>
          <span>{movie.adult ? '청불' : '청소년관람'}</span>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard
