import React from 'react'
import members from './data/members.json'

const Ex03 = () => {
    console.log(members)
    /*
    filter() 함수
    - 배열 내 요소들 중 특정 조건에 해당하는 요소들만
      새로운 배열로 만들어 반환해주는 함수
    - 조건식을 만들면 해당하는 요소만 추출
    
    */
    let newArray = members.filter((member) => member.task === "Front-end")
    console.log(newArray)

    //  age가 27세 미만의 데이터를 추출한 후 콘솔창에 출력해보기
    let newArray2 = members.filter((member) => member.age < 27)
    console.log(newArray2)



    return (
        <div>{newArray[0].name}</div>
    )
}

export default Ex03