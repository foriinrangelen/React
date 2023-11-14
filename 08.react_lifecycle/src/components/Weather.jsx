import React from 'react'

const Weather = ({ weather, day, setDay }) => {
  // 객체?.속성: 해당 객체가 값이 있으면 속성출력 없으면 에러없이 undefined 출력
  const weatherImg = weather?.weather[0].icon
  return (
    <div>
      <h1>{day}</h1>
      {/* <p>{weatherImg}</p> */}
      <img src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`}></img>
      <p>
        현재 {weather?.name}는 {weather?.main.temp} ℃입니다
      </p>
    </div>
  )
}

export default Weather
