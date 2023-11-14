import React from 'react'

const ContactItem = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <h4>{item.phone}</h4>
      <hr />
    </div>
  )
}

export default ContactItem
