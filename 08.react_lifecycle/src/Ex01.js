import React, { useEffect, useState } from 'react'
import Weather from './components/Weather'


/*
    실습) 날씨앱 만들기
    1. 현재위치(위도,경도)를 navigator.geolocation 객체로부터 가져온다.
    2. 위도,경도 정보를 Weather API 로 현재 날씨 정보를 요청한다.
        - fetch API 활용, useEffect() 활용
        * fetch API: 서버의 데이터를 비동기 방식으로 요청하는 web API
          fetch API 구조 : 
           fetch(url)
           .then((response)=>{
                실행할 로직
           })
           .catch((error)=>{
                오류가 발생했을때 실행할 로직
           })
           .finally(()=>{
                무조건 실행할 로직
           })
           
    3. 받아온 정보 중에서 지역, 온도,날씨이미지를 화면에 출력한다.
        - 날씨정보는 state로 관리
        - 날짜정보 출력
        - 
    
*/


const Ex01 = () => {
    // 날씨정보를 저장하는 state
    const [weather, setWeather] = useState()
    const [day, setDay] = useState("0000 00/00")
    // 현재 위치(위,경도)를 가져오는 함수
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position);
            let lat = position.coords.latitude
            let lng = position.coords.longitude
            console.log("위,경도 : ", lat, lng)
            getCurrentWeather(lat, lng)
        })
    }

    const getCurrentWeather = async (lat, lng) => {
        const API_KEY = "29d877bc68a37cc13b5115976c778115"
        const URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        console.log(URI)
        try {
            let response = await fetch(URI)
            console.log("res 날씨정보", response)
            let data = await response.json()
            console.log("현재 날씨정보", data)
            setWeather(data)

        }
        catch (err) {
            console.log("캐치에러", err)
        }


    }
    useEffect(() => {
        // 현재 날짜 정보 가져오기
        const today = new Date()
        const year = today.getFullYear()
        const month = ('0' + (today.getMonth() + 1))
        console.log(month)
        const day = ('0' + today.getDate())
        // 날짜 정보를 state에 저장
        setDay(`${year} ${month}/${day}`)

        // var dateString = year + ' ' + month + '/' + day
        // 현재 날씨 정보요청
        getCurrentLocation()
    }, [day])

    return (
        <div>

            <Weather weather={weather} day={day} setDay={setDay} />
        </div>
    )
}

export default Ex01