import React, { useEffect, useState } from 'react'
import api from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { MovieReducerActions } from '../redux/reducers/movieSlice'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from 'react-spinners/ClipLoader'

const Home = () => {
  // const popularMovies = useSelector((state) => state.movie.popularMovies)
  // const topRatedMovies = useSelector((state) => state.movie.topRated)
  // const upcomingMovies = useSelector((state) => state.movie.upcoming)

  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  )

  console.log('[Home.jsx]: ', popularMovies)

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  //3가지 종류의 영화목록을 묶어서 요청하는 방법
  // -Promise.all() : 모든 요청에 대한 응답이 올 때까지 대기
  const getMovieList = async () => {
    setLoading(true) //데이터를 가져오기 전

    const popularList = api.get('/movie/popular?language=ko-KR&page=1')
    const topRatedList = api.get('/movie/top_rated?language=ko-KR&page=1')
    const upcomingList = api.get('/movie/upcoming?language=ko-KR&page=1')
    const genreList = api.get('/genre/movie/list?language=ko')

    const [popular, topRated, upcoming, genre] = await Promise.all([
      popularList,
      topRatedList,
      upcomingList,
      genreList
    ])
    // console.log(popular.data)
    // console.log(topRated.data)
    // console.log(upcoming.data)
    console.log('장르:',genre);

    setLoading(false)

    dispatch(
      MovieReducerActions.initData({
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
        genre:genre.data
      })
    )
  }

  useEffect(() => {
    getMovieList()
  }, [])

  //true: 데이터를 가져오기 전
  //false: 데이터를 가져온 후
  return (
    <div>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          {/* {popularMovies && <Banner movie={popularMovies[0]} />} */}
          <Banner movie={popularMovies[0]} />

          <h1>인기있는 영화</h1>
          <MovieSlide movies={popularMovies} />
          <h1>평점이 높은 영화</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>개봉예정인 영화</h1>
          <MovieSlide movies={upcomingMovies} />
        </div>
      )}
    </div>
  )
}

export default Home
