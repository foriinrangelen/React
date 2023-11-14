import React, { useEffect, useState, CSSProperties } from 'react'
import Weather from './components/Weather'
import axios from 'axios'
import SyncLoader from "react-spinners/SyncLoader";

const Ex02 = () => {

    // 날씨정보를 저장하는 state
    const [weather, setWeather] = useState(null)
    const [day, setDay] = useState("0000 00/00")
    const [isLoading, setIsLoading] = useState()
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
        const API_KEY = process.env.REACT_APP_API_KEY
        // console.log(process.env.REACT_APP_API_KEY)
        const URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        // console.log(URI)
        try {
            setIsLoading(true)
            let res = await axios.get(URI)

            console.log("res 날씨정보", res)
            setWeather(res.data)
            setIsLoading(false)
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

        // 현재 날씨 정보요청
        getCurrentLocation()
    }, [day])

    return (
        <div>
            {isLoading ? <SyncLoader /> : <Weather weather={weather} day={day} setDay={setDay} />}
            {/* {weather === null ? <SyncLoader /> : <Weather weather={weather} day={day} setDay={setDay} />} */}
            {/* <SyncLoader /> */}
            {/* <Weather weather={weather} day={day} setDay={setDay} /> */}
        </div>
    )
}

export default Ex02