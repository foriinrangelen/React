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

    let filterM = menus.filter((item) => item.category === category)
    if (category === '커피') setFilter(filterM)
    else if (category === '에이드') setFilter(filterM)
    else if (category === '디저트') setFilter(filterM)
    else if (category === '베이커리') setFilter(filterM)
    else setFilter(menus)
  }

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
