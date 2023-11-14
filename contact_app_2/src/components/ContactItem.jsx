import React from 'react'

const ContactItem = ({item}) => {
  return (
    <div className='contact-item-box'>
        <p className='contact-img'>
            <img src="https://static.thenounproject.com/png/100859-200.png" alt="연락처 이미지" />
        </p>
        <p className='contact-info'>
            <div>{item.name}</div>
            <div>{item.phone}</div>
        </p>
    </div>
  )
}

export default ContactItem