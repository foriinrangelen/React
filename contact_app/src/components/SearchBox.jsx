import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

const SearchBox = () => {
  let userSearch = useRef()
  const contactList = useSelector((state) => state.contact.contacts)
  const userSearchCheck = () => {
    console.log(userSearch.current.value)
    let c = contactList.filter((item) =>
      item.name.includes(userSearch.current.value)
    )
    console.log(c)
  }
  return (
    <div>
      <input type="text" ref={userSearch} />
      <br />
      <button onClick={userSearchCheck}>찾기</button>
    </div>
  )
}

export default SearchBox
