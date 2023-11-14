import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Accordion,
  Form
} from 'react-bootstrap'

const Movies = () => {
  const { popularMovies } = useSelector((state) => state.movie)
  const [movieFilterData, setMovieFilterData] = useState(popularMovies)

  // useEffect(() => {
  //   if (popularMovies.length != 0) {
  //     setMovieFilterData(popularMovies)
  //   }
  // }, [])

  console.log(popularMovies)
  const movieFilter = (abc) => {
    console.log(abc)
    let sortedData = []
    if (abc === '1') {
      // react에서 state는 불변성을 유지해야하기 때문에
      // 전개연산자를 통해서 새로운 배열을 생성하고 sort()함수를 실행해야한다
      // 정렬된 배열을 state에 다시 토기화해주면 영화정보가 정렬되어 출력된다
      sortedData = [...movieFilterData].sort((a, b) =>
        a.title.localeCompare(b.title)
      )
    } else if (abc === '2') {
      sortedData = [...movieFilterData].sort((a, b) =>
        b.title.localeCompare(a.title)
      )
    } else if (abc === '3') {
      sortedData = [...movieFilterData].sort((a, b) => {
        return a.vote_average - b.vote_average
      })
    } else if (abc === '4') {
      sortedData = [...movieFilterData].sort((a, b) => {
        return b.vote_average - a.vote_average
      })
    } else if (abc === '5') {
      sortedData = [...movieFilterData].sort((a, b) => {
        return a.popularity - b.popularity
      })
    } else if (abc === '6') {
      sortedData = [...movieFilterData].sort((a, b) => {
        return b.popularity - a.popularity
      })
    }
    setMovieFilterData(sortedData)
  }
  return (
    <div>
      <Container>
        <Row>
          <Row>
            <Col>
              <h1>인기영화 필터링</h1>
            </Col>
          </Row>
          <Col sm={3}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>정렬</Accordion.Header>
                <Accordion.Body>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      movieFilter(e.target.value)
                    }}
                  >
                    <option>Open this select menu</option>
                    <option value="1">제목 오름차순</option>
                    <option value="2">제목 내림차순</option>
                    <option value="3">평점 오름차순</option>
                    <option value="4">평점 내림차순</option>
                    <option value="5">인기도 오름차순</option>
                    <option value="6">인기도 내림차순</option>
                  </Form.Select>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={9} className="movie-card-list">
            {movieFilterData.map((item) => (
              <Card style={{ width: '12rem' }}>
                <Card.Img
                  variant="top"
                  src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.release_date}</Card.Text>
                  <Card.Text>{item.vote_average}</Card.Text>
                  <Card.Text>{item.popularity}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies
