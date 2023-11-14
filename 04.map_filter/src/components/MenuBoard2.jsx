import React from 'react'
import { useState } from 'react'
import menuData from '../data/cafe.json'
import MenuItem from './MenuItem'
import MenuNav from './MenuNav'

const MenuBoard = () => {
  console.log(menuData)
  const [menus, setMenus] = useState(menuData)
  const [filter, setFilter] = useState(menuData)

  // 특정 메뉴를 눌렀을 때 해당 메뉴데이터만 필터링하는 기능
  const filterMenus = (e) => {
    let category = e.target.innerText
    console.log('MenuBoard: ', category)

    if (category === '커피') setFilter(coffeeList)
    else if (category === '에이드') setFilter(adeList)
    else if (category === '디저트') setFilter(dessertList)
    else if (category === '베이커리') setFilter(bakeryList)
    else setFilter(menus)
  }

  // 커피메뉴만 필터링한 후 저장하는 변수 생성
  const coffeeList = menus.filter((item) => item.category === '커피')

  // 에이드, 디저트, 베이커리 각 메뉴만 필터링된 배열을 생성하시오
  const adeList = menus.filter((item) => item.category === '에이드')
  const dessertList = menus.filter((item) => item.category === '디저트')
  const bakeryList = menus.filter((item) => item.category === '베이커리')
  console.log(coffeeList)
  console.log(adeList)
  console.log(dessertList)
  console.log(bakeryList)
  return (
    <div>
      {/* 네비게이션바 영역 */}
      <div className="menu-nav">
        <MenuNav onClick={filterMenus} />
      </div>
      <div className="menu-list">
        {/* 커피메뉴출력 영역 */}
        {filter.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuBoard
