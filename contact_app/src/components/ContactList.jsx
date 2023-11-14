import React from 'react'
import ContactItem from './ContactItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import SearchBox from './SearchBox'
const ContactList = () => {
  const contactList = useSelector((state) => state.contact.contacts)
  console.log('컴포넌트에서의 contacts', contactList)
  //   const [userItem, setUserItem] = useState(contactList)
  useEffect(
    (contactList) => {
      console.log(contactList)
    },
    [contactList]
  )
  //   console.log('123333333333333333333333', contactList)
  return (
    <div>
      <h3>총 연락처: {contactList.length}</h3>
      {contactList.map((item) => {
        return (
          <ContactItem key={item.id} item={item} length={contactList.length} />
        )
      })}
      <SearchBox />
    </div>
  )
}

export default ContactList
